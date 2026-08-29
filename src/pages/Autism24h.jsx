import ProjectShowcase from "../components/ProjectShowcase.jsx";
import RunnerGrid from "../components/RunnerGrid.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import TopoDivider from "../components/TopoDivider.jsx";
import { binderbubiRunners, beanRoastersRunners } from "../data/runners.js";
import { autismPartners } from "../data/partners.js";

const STATS = [
  ["24h", "Timp de alergare"],
  ["24", "Alergători Mediaș"],
  ["10 lei", "= 1 kilometru"],
  ["∞", "Speranță"],
];

function DonationTeam({ name, current, goal, moneyRaised, moneyGoal, href }) {
  const pct = Math.min(100, Math.round((current / goal) * 100));
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="font-display font-bold text-lg mb-2">{name}</h3>
      <div className="relative h-6 rounded-full bg-ink/10 overflow-hidden mb-2">
        <div
          className="h-full bg-trail transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-ink">
          {current} / {goal} KM DONAȚI
        </span>
      </div>
      <p className="text-sm text-ink/70 mb-3">
        <strong className="text-ink">Total strâns:</strong> {moneyRaised} LEI (Obiectiv: {moneyGoal} LEI)
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-trail text-paper font-display font-bold uppercase tracking-wide text-sm px-6 py-3 hover:bg-ink transition-colors"
      >
        Cumpără kilometri
      </a>
    </div>
  );
}

export default function Autism24h() {
  return (
    <main>
      {/* CAUSE HEADER */}
      <section className="relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-ink" />
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1500"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="relative z-10 px-6 py-20 md:py-28 max-w-3xl mx-auto">
          <span className="inline-block bg-trail text-paper text-xs font-display font-bold tracking-[0.3em] uppercase px-3 py-1.5 mb-6">
            Ultramaraton Caritabil
          </span>
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/images/logo-bbr.webp" className="h-12 md:h-16" alt="" />
            <h1 className="font-display text-3xl md:text-6xl font-black uppercase text-paper">
              Autism 24h Mamaia
            </h1>
          </div>
          <p className="text-paper/85 text-lg max-w-xl mx-auto">
            24 alergători din Mediaș. 24 de ore de efort continuu pe nisip. Un singur scop: să
            transformăm kilometrii în terapie.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {STATS.map(([value, label]) => (
              <div key={label} className="bg-paper/10 border border-paper/20 p-5">
                <p className="font-display text-3xl md:text-4xl font-black text-trail-light">{value}</p>
                <p className="text-paper/70 text-xs tracking-wide uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TopoDivider tone="paper" className="bg-ink" />

      {/* PROIECTUL NOSTRU */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-6">
          Proiectul <span className="text-trail">Nostru</span>
        </h2>
        <p className="text-ink/70 text-lg leading-relaxed mb-6">
          Între 12 și 13 septembrie, echipele <strong className="text-ink">Binderbubi Running Mediaș</strong>{" "}
          și <strong className="text-ink">Bean Roasters Running Mediaș</strong> vor fi pe plaja din
          Mamaia pentru a susține copiii cu nevoi speciale. Nu este o competiție de viteză, ci un
          maraton al solidarității.
        </p>

        <div className="bg-white border border-dashed border-trail p-5 mb-8">
          <p className="text-ink">
            <strong>Cum funcționează?</strong> Fiecare <strong className="text-trail">10 LEI</strong>{" "}
            donați reprezintă <strong className="text-trail">1 KM</strong> pe care noi îl parcurgem
            în numele tău pentru această cauză.
          </p>
        </div>

        <div className="bg-white border-l-8 border-trail p-6 md:p-8">
          <h3 className="font-display font-bold text-xl uppercase mb-6">Kilometri cumpărați</h3>
          <DonationTeam
            name="Binderbubi Running Mediaș"
            current={2918}
            goal={2000}
            moneyRaised="29.180"
            moneyGoal="20.000"
            href="https://www.autism24h.ro/echipa/binderbubi-running-medias-737"
          />
          <DonationTeam
            name="Bean Roasters Running Mediaș"
            current={2407}
            goal={2000}
            moneyRaised="24.070"
            moneyGoal="20.000"
            href="https://www.autism24h.ro/echipa/bean-roasters-running-medias-849"
          />
        </div>

        <a
          href="https://www.autism24h.ro/proiecte-sustinute/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-8 bg-ink text-paper font-display font-bold uppercase tracking-wide px-8 py-4 hover:bg-trail transition-colors"
        >
          Vezi proiectele susținute
        </a>
      </section>

      {/* FAPTE BUNE */}
      <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-20">
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-8">
          Fapte <span className="text-trail">Bune</span>
        </h2>
        <ProjectShowcase />
      </section>

      {/* ECHIPE */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 border-t border-ink/10">
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-10 text-center">
          Echipele <span className="text-trail">Noastre</span>
        </h2>
        <RunnerGrid team={{ name: "Binderbubi", suffix: "Running Mediaș" }} runners={binderbubiRunners} />
        <RunnerGrid team={{ name: "Bean Roasters", suffix: "Running Mediaș" }} runners={beanRoastersRunners} />
      </section>

      {/* URMĂREȘTE EFORTUL */}
      <section className="bg-paper-dim bg-ink/[0.03] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-10">
            Urmărește <span className="text-trail">Efortul</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white p-6 border border-ink/10">
              <h3 className="font-display font-bold text-lg uppercase mb-2">24 ore non-stop</h3>
              <p className="text-ink/70">
                Alergăm împreună 24h, ne încurajăm reciproc și ducem provocarea până la final.
              </p>
            </div>
            <div className="bg-white p-6 border border-ink/10">
              <h3 className="font-display font-bold text-lg uppercase mb-2">Nisip și voință</h3>
              <p className="text-ink/70">
                Alergarea pe nisip este de două ori mai grea, dar motivația noastră este de zece ori
                mai puternică.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTENERI */}
      <section className="max-w-5xl mx-auto px-6 py-4">
        <PartnersSection label="Parteneri" items={autismPartners} />
      </section>
    </main>
  );
}
