// Pure functions: turn daily rows from /api/history into series, buckets and derived stats.
export const START = "2026-05-15";

const DAY = 86400000;
const toDate = (s) => new Date(s + "T00:00:00Z");
const key = (d) => d.toISOString().slice(0, 10);
export const addDays = (s, n) => key(new Date(toDate(s).getTime() + n * DAY));
export const diffDays = (a, b) => Math.round((toDate(b) - toDate(a)) / DAY);
export const weekStart = (s) => addDays(s, -((toDate(s).getUTCDay() + 6) % 7)); // Monday
export const monthStart = (s) => s.slice(0, 7) + "-01";
export const yearStart = (s) => s.slice(0, 4) + "-01-01";
export const weekday = (s) => (toDate(s).getUTCDay() + 6) % 7; // 0 = Monday
export const daysInMonth = (s) => {
  const [y, m] = s.split("-").map(Number);
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
};
const prevMonthStart = (s) => {
  const [y, m] = s.split("-").map(Number);
  return key(new Date(Date.UTC(y, m - 2, 1)));
};
const sum = (a) => a.reduce((x, y) => x + y, 0);

// One entry per day from START to today, zero-filled.
export function buildSeries(rows, start, today) {
  const map = new Map(rows.map((r) => [r.day, r.views]));
  const n = diffDays(start, today);
  const out = [];
  for (let i = 0; i <= n; i++) {
    const day = addDays(start, i);
    out.push({ day, views: map.get(day) || 0 });
  }
  return out;
}

export function movingAverage(series, window = 7) {
  return series.map((_, i) => {
    const slice = series.slice(Math.max(0, i - window + 1), i + 1);
    return sum(slice.map((p) => p.views)) / slice.length;
  });
}

export function periodEnd(kind, k) {
  if (kind === "day") return k;
  if (kind === "week") return addDays(k, 6);
  if (kind === "month") return addDays(k, daysInMonth(k) - 1);
  return k.slice(0, 4) + "-12-31";
}

export function bucketize(series, kind, today) {
  const keyOf = { day: (d) => d, week: weekStart, month: monthStart, year: yearStart }[kind];
  const map = new Map();
  for (const p of series) {
    const k = keyOf(p.day);
    const b = map.get(k) || { key: k, views: 0, days: 0 };
    b.views += p.views;
    b.days += 1;
    map.set(k, b);
  }
  return [...map.values()].map((b) => ({
    ...b,
    avg: b.views / b.days,
    startsEarly: kind !== "day" && b.key < series[0].day, // period began before tracking started
    ongoing: periodEnd(kind, b.key) >= today, // period not finished yet
  }));
}

export function computeStats(series, today, dayFrac = 1) {
  const n = series.length;
  if (!n) return null;
  const first = series[0].day;
  const total = sum(series.map((p) => p.views));
  const complete = n > 1 ? series.slice(0, -1) : series; // today is still in progress
  const cv = complete.map((p) => p.views);
  const avg = cv.length ? sum(cv) / cv.length : 0;
  const sorted = [...cv].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length ? (sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2) : 0;
  const stdDev = cv.length ? Math.sqrt(sum(cv.map((v) => (v - avg) ** 2)) / cv.length) : 0;
  const best = series.reduce((a, b) => (b.views > a.views ? b : a), series[0]);
  const worst = complete.reduce((a, b) => (b.views < a.views ? b : a), complete[0]);
  const zeroDays = cv.filter((v) => v === 0).length;

  let longestStreak = 0;
  let run = 0;
  for (const p of series) {
    if (p.views > 0) {
      run++;
      longestStreak = Math.max(longestStreak, run);
    } else run = 0;
  }
  let i = n - 1;
  if (series[i].views === 0) i--; // today may simply not have visits yet
  let currentStreak = 0;
  while (i >= 0 && series[i].views > 0) {
    currentStreak++;
    i--;
  }

  const wd = Array.from({ length: 7 }, () => ({ sum: 0, count: 0 }));
  for (const p of complete) {
    const w = weekday(p.day);
    wd[w].sum += p.views;
    wd[w].count++;
  }
  const weekdays = wd.map((w, idx) => ({ idx, sum: w.sum, count: w.count, avg: w.count ? w.sum / w.count : 0 }));
  const withData = weekdays.filter((w) => w.count);
  const bestWeekday = withData.length ? withData.reduce((a, b) => (b.avg > a.avg ? b : a)) : null;
  const weekendViews = sum(series.filter((p) => weekday(p.day) >= 5).map((p) => p.views));
  const weekendShare = total ? (weekendViews / total) * 100 : 0;

  const sumRange = (from, to) => sum(series.filter((p) => p.day >= from && p.day <= to).map((p) => p.views));

  function compare(kind) {
    let cur0, prev0, prev1;
    if (kind === "day") {
      cur0 = today;
      prev0 = addDays(today, -1);
      prev1 = prev0;
    } else if (kind === "week") {
      cur0 = weekStart(today);
      prev0 = addDays(cur0, -7);
      prev1 = addDays(prev0, diffDays(cur0, today));
    } else {
      cur0 = monthStart(today);
      prev0 = prevMonthStart(today);
      const prevEnd = addDays(cur0, -1);
      prev1 = addDays(prev0, diffDays(cur0, today));
      if (prev1 > prevEnd) prev1 = prevEnd;
    }
    const cur = sumRange(cur0, today);
    if (prev0 < first) return { cur, prev: null, pct: null }; // previous period not tracked
    const prev = sumRange(prev0, prev1);
    return { cur, prev, pct: prev > 0 ? ((cur - prev) / prev) * 100 : null };
  }

  const last7 = cv.slice(-7);
  const trend =
    cv.length >= 14
      ? (() => {
          const a = sum(cv.slice(-7));
          const b = sum(cv.slice(-14, -7));
          return { last: a, prev: b, pct: b > 0 ? ((a - b) / b) * 100 : null };
        })()
      : null;

  const monthDone = complete.filter((p) => p.day >= monthStart(today) && p.day >= first);
  const remainingMonth = daysInMonth(today) - (diffDays(monthStart(today), today) + 1);
  const monthTotal = sumRange(monthStart(today), today);
  const monthProjection = monthDone.length
    ? monthTotal + (sum(monthDone.map((p) => p.views)) / monthDone.length) * remainingMonth
    : null;

  const yearTotal = sumRange(yearStart(today), today);
  const recentAvg = last7.length ? sum(last7) / last7.length : null;
  const yearProjection =
    recentAvg === null ? null : yearTotal + recentAvg * diffDays(today, yearStart(today).slice(0, 4) + "-12-31");

  const todayViews = series[n - 1].views;

  return {
    total,
    days: n,
    avg,
    median,
    stdDev,
    best,
    worst,
    zeroDays,
    longestStreak,
    currentStreak,
    weekdays,
    bestWeekday,
    weekendShare,
    today: compare("day"),
    week: compare("week"),
    month: compare("month"),
    yearTotal,
    todayViews,
    todayEstimate: dayFrac >= 0.15 ? Math.round(todayViews / dayFrac) : null,
    trend,
    monthProjection,
    yearProjection,
    recentAvg,
  };
}
