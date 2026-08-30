import CountdownTimer from "../components/CountdownTimer.jsx";
import MiniRouteCard from "../components/MiniRouteCard.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import TopoDivider from "../components/TopoDivider.jsx";
import { coffeeRunRoutes } from "../data/coffeeRunRoutes.js";
import { coffeeRunOrganizers, coffeeRunPartners } from "../data/partners.js";

const EVENT_DATE = new Date("June 1, 2026 13:00:00");

export default function CoffeeRun() {
  return (
    <main className="bg-[#fff0e3]">
      <img
        src="/images/evenimente/coffeerun.webp"
        alt="Mediaș Coffee Run"
        fetchpriority="high"
        className="w-full"
      />

      <section className="max-w-2xl mx-auto px-6 py-10 text-center">
        <p className="uppercase tracking-widest text-sm text-ink/50 mb-3">Au mai rămas</p>
        <CountdownTimer targetDate={EVENT_DATE} accent="text-[#AC0000]" />
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-2">
          1 Iunie, Ora <span className="text-trail">13:00</span>
        </h2>
        <h3 className="font-display text-xl font-bold mb-4">Taxă de participare: 30 lei</h3>
        <p className="text-sm text-ink/60 mb-1">
          * Înscriere gratuită pentru copiii sub 14 ani (înscrierea este necesară și în cazul
          acestora)
        </p>
        <p className="text-sm text-ink/60 mb-6">
          * Înscrierea se face la Bean Roasters Centru (Strada Petőfi Sándor 2) sau la Coffee CooP
          (Strada Axente Sever 29)
        </p>

        <p className="text-trail font-semibold mb-4">
          Pentru participarea la eveniment este necesară completarea declarației pe proprie
          răspundere:
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="/declaratii/declaratie_coffee_run.doc"
            download
            className="inline-flex items-center gap-2 bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-5 py-3 hover:bg-trail transition-colors"
          >
            <span>⬇</span> Declarație
          </a>
          <a
            href="/declaratii/declaratie_coffeerun_minori.doc"
            download
            className="inline-flex items-center gap-2 bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-5 py-3 hover:bg-trail transition-colors"
          >
            <span>⬇</span> Declarație Minori
          </a>
        </div>

        <a
          href="https://maps.app.goo.gl/5a2LcmwQRNUs2wGx9"
          target="_blank"
          rel="noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <h2 className="font-display text-xl font-bold">
            <span className="text-trail">Start:</span> Bean Roasters Mediaș
          </h2>
          <h3 className="text-ink/60">Strada Petőfi Sándor nr. 2</h3>
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="font-display text-2xl font-black uppercase mb-4">
          Despre<span className="text-trail">.</span>
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Coffee Run se va desfășura în data de <strong className="text-ink">1 iunie</strong> 📆 și
          va include patru trasee, adaptate diferitelor niveluri de dificultate, desfășurate în
          zona centrală a orașului.
          <br />
          <br />
          Invităm toți medieșenii să se alăture în număr cât mai mare acestei inițiative care
          promovează un stil de viață activ, implicarea comunității și performanțele tinerilor în
          domeniul tehnologiei.
          <br />
          <br />
          Evenimentul este organizat de The Bean Roasters, în parteneriat cu Coffee CooP și
          Primăria Municipiului Mediaș.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-10">
        <h2 className="font-display text-2xl font-black uppercase mb-4">
          Scopul<span className="text-trail">.</span>
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Și la această ediție, evenimentul pune accent pe implicarea comunității 🤝 în dezvoltarea
          și susținerea performanței, fondurile strânse urmând să fie donate pentru a susține
          participarea echipei „The Resistance” la etapa europeană 🌍 a competiției FIRST Tech
          Challenge.
          <br />
          <br />
          Echipa se bucură deja de susținere din partea colegilor de la Liceul Teoretic „Roth –
          Oberth”, dar și de la alte unități de învățământ medieșene.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="font-display text-2xl font-black uppercase mb-6">
          Trasee<span className="text-trail">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coffeeRunRoutes.map((r) => (
            <MiniRouteCard key={r.name} route={r} accent="text-[#AC0000]" />
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-16 text-center">
        <h2 className="font-display text-2xl font-black uppercase mb-6">
          Susține echipa<span className="text-trail">.</span>
        </h2>
        <a
          href="https://buy.stripe.com/aFa9AU7JNgM67LS3TT1ZS00"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-trail text-paper font-display font-bold uppercase tracking-wide px-10 py-4 hover:bg-ink transition-colors"
        >
          Donează
        </a>
      </section>

      <TopoDivider />
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <PartnersSection label="Organizatori" items={coffeeRunOrganizers} />
        <PartnersSection label="Parteneri" items={coffeeRunPartners} />
      </section>
    </main>
  );
}
