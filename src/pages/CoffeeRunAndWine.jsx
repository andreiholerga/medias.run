import CountdownTimer from "../components/CountdownTimer.jsx";
import MiniRouteCard from "../components/MiniRouteCard.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import TopoDivider from "../components/TopoDivider.jsx";
import { coffeeRunWineRoutes } from "../data/coffeeRunRoutes.js";
import { coffeeRunWineOrganizers } from "../data/partners.js";

const EVENT_DATE = new Date("August 29, 2026 09:30:00");

export default function CoffeeRunAndWine() {
  return (
    <main className="bg-[#b7dce3]">
      <img
        src="/images/evenimente/coffeerunandwine2.webp"
        alt="Coffee Run & Wine"
        fetchpriority="high"
        className="w-full"
      />

      <section className="max-w-2xl mx-auto px-6 py-10 text-center">
        <p className="uppercase tracking-widest text-sm text-ink/50 mb-3">Au mai rămas</p>
        <CountdownTimer targetDate={EVENT_DATE} accent="text-[#AC0000]" />
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-2">
          29 August, Ora <span className="text-trail">9:30</span>
        </h2>
        <h2 className="font-display text-xl font-bold mb-3">Taxă de participare:</h2>
        <p className="font-display text-lg font-bold mb-6">
          &lt;10 ani - <span className="text-trail">Gratuit</span>
          <br />
          10-17 ani - <span className="text-trail">20 RON</span>
          <br />
          Adulți - <span className="text-trail">70 RON</span>
        </p>
        <p className="text-sm text-ink/60 mb-1">
          * Înscrierea se face la Bean Roasters Centru (Strada Petőfi Sándor 2) sau la The Wine
          Corner (Strada Johannes Honterus 40)
        </p>
        <p className="text-sm text-ink/60 mb-6">* Și copiii sub 10 ani trebuie înscriși</p>

        <p className="text-trail font-semibold mb-4">
          Pentru participarea la eveniment este necesară completarea declarației pe proprie
          răspundere:
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="/declaratii/declaratie_COFFEE_RUN_AND_WINE.doc"
            download
            className="inline-flex items-center gap-2 bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-5 py-3 hover:bg-trail transition-colors"
          >
            <span>⬇</span> Declarație
          </a>
          <a
            href="/declaratii/declaratie_minori_COFFEE_RUN_AND_WINE.doc"
            download
            className="inline-flex items-center gap-2 bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-5 py-3 hover:bg-trail transition-colors"
          >
            <span>⬇</span> Declarație Minori
          </a>
          <a
            href="/declaratii/declaratie_minori_cluburi_COFFEE_RUN_AND_WINE.doc"
            download
            className="inline-flex items-center gap-2 bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-5 py-3 hover:bg-trail transition-colors"
          >
            <span>⬇</span> Declarație Minori - Cluburi
          </a>
        </div>

        <h2 className="font-display text-xl font-bold">
          <span className="text-trail">Start:</span> Via Medwine
        </h2>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="font-display text-2xl font-black uppercase mb-4">
          Despre<span className="text-trail">.</span>
        </h2>
        <p className="text-ink/70 leading-relaxed">
          🍇🏃‍♂️ Coffee Run & Wine - alergare în via Medwine! 🍷
          <br />
          <br />
          Pe 29 august, de la ora 9:30, vă invităm la o alergare specială în cadrul Povestea
          Vinului la Mediaș, direct printre viile Medwine! 🌿
          <br />
          <br />
          Va fi o dimineață cu alergare, voie bună, socializare și o cauză frumoasă. ❤️
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="font-display text-2xl font-black uppercase mb-6">
          Trasee<span className="text-trail">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coffeeRunWineRoutes.map((r) => (
            <MiniRouteCard key={r.name} route={r} accent="text-[#AC0000]" />
          ))}
        </div>
      </section>

      <TopoDivider />
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <PartnersSection label="Organizatori" items={coffeeRunWineOrganizers} />
      </section>
    </main>
  );
}
