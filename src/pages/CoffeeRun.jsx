import CountdownTimer from "../components/CountdownTimer.jsx";
import MiniRouteCard from "../components/MiniRouteCard.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import TopoDivider from "../components/TopoDivider.jsx";
import { coffeeRunRoutes6Dec } from "../data/eventRoutes.js";
import { coffeeRunOrganizers6Dec, coffeeRunBeneficiari6Dec } from "../data/partners.js";

const EVENT_DATE = new Date("December 6, 2026 13:00:00");

export default function CoffeeRun() {
  return (
    <main className="bg-[#ededed]">
      <title>Mediaș Coffee Run | 6 Decembrie</title>
      <meta name="description" content="Pe 6 decembrie 2026, ora 13:00, Aterm și Primăria Municipiului Mediaș susțin un eveniment dedicat sportului și solidarității: Medias Coffee Run."></meta>
      
      <img
        src="/images/evenimente/coffeerun6dec.webp"
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
          6 Decembrie, Ora <span className="text-trail">13:00</span>
        </h2>
        <h3 className="font-display text-xl font-bold mb-4">SUB 10 ANI: Gratuit</h3>
        <h3 className="font-display text-xl font-bold mb-4">10-16 ANI: 20 lei</h3>
        <h3 className="font-display text-xl font-bold mb-4">16+ ANI: 30 lei</h3>

        <p className="text-sm text-ink/60 mb-6">
          * Înscrierile se fac fizic la: Bean Centru, Bean Kaufland și Bean Avram Iancu
        </p>
  

        <a
          href="https://maps.app.goo.gl/5a2LcmwQRNUs2wGx9"
          target="_blank"
          rel="noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <h2 className="font-display text-xl font-bold">
            <span className="text-trail">Start:</span> Aterm
          </h2>
          <h3 className="text-ink/60">Strada Titus Andronic 160, Mediaș</h3>
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="font-display text-2xl font-black uppercase mb-4">
          Despre<span className="text-trail">.</span>
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Pe 6 decembrie 2026, ora 13:00, Aterm și Primăria Municipiului Mediaș susțin un eveniment dedicat sportului și solidarității: Medias Coffee Run.
<br /><br />Evenimentul este organizat de Asociația Binderbubi Run & Hike și Bean Roasters Mediaș, iar componenta caritabilă este dedicată Centrului de Recuperare Pruncul Isus Mediaș și Asociației Sfântul Casian Mediaș.
<br /><br />Obiectivul proiectului este strângerea a 30.000 de lei pentru burse lunare destinate specialiștilor care lucrează în terapia și recuperarea copiilor cu dizabilități – pentru atragerea și păstrarea terapeuților, creșterea calității serviciilor și sprijinirea unui număr cât mai mare de copii.
<br /><br />Toate încep cu un prim pas. Iar primul pas îl facem împreună, pe 6 decembrie.
4 km • 10 km • 500 m copii | Aterm, Mediaș | 13:00
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="font-display text-2xl font-black uppercase mb-6">
          Trasee<span className="text-trail">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coffeeRunRoutes6Dec.map((r) => (
            <MiniRouteCard key={r.name} route={r} accent="text-[#AC0000]" />
          ))}
        </div>
      </section>

      <TopoDivider />
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <PartnersSection label="Organizatori" items={coffeeRunOrganizers6Dec} />
        <PartnersSection label="Beneficiari" items={coffeeRunBeneficiari6Dec} />
      </section>
    </main>
  );
}
