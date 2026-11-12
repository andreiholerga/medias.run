CREATE TABLE IF NOT EXISTS daily_views (
  day   TEXT PRIMARY KEY,           -- YYYY-MM-DD (ora Mediașului)
  views INTEGER NOT NULL DEFAULT 0
);
