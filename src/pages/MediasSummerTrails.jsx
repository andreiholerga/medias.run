import CountdownTimer from "../components/CountdownTimer.jsx";
import MiniRouteCard from "../components/MiniRouteCard.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import TopoDivider from "../components/TopoDivider.jsx";
import { summerTrailsRoutes } from "../data/routes.js";
import { summerTrailsOrganizers } from "../data/partners.js";
import { summerTrailsPartners } from "../data/partners.js";
import RouteCard from "../components/RouteCard.jsx";
import ChallengeTeaser from "../components/ChallengeTeaser.jsx";

const EVENT_DATE = new Date("June 19, 2027 09:30:00");

export default function MediasSummerTrails() {
  return (
    <main className="bg-[#fadfce]">
      <title>Mediaș Summer Trails | MST 2027</title>
      <meta name="description" content="MST 2027 - Mediaș - 19 iunie 2027 - 24k - 12k - 6.5k - Family run - Trasee, Natură, Provocare, Comunitate."></meta>
      <section className="bg-[#ff751f]">
        <img
          src="/images/evenimente/summertrails1.webp"
          alt="Mediaș Summer Trails MST 2027. 19 Iunie 2027. Curse: 24k, 12k, 6.5k, Family run"
          fetchpriority="high"
          className="w-full md:max-w-[66%] h-auto mx-auto"
        />
      </section>

      <section className="max-w-2xl mx-auto px-6 py-10 text-center">
        <p className="uppercase tracking-widest text-sm text-ink/50 mb-3">
          Au mai rămas
        </p>
        <CountdownTimer targetDate={EVENT_DATE} accent="text-[#ff751f]" />
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-2">
          19 Iunie 2027
        </h2>
        <br></br>
        <h2 className="font-display text-2xl md:text-3xl text-[#ff751f] mb-2">
          Start înscrieri MST: 7 Decembrie 2026
        </h2>
      </section>
      
      <ChallengeTeaser />


      <section className="max-w-3xl mx-auto px-6 py-10">
          <h2 className="font-display text-2xl font-black uppercase mb-4">
            Despre<span className="text-trail">.</span>
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Informații noi în curând...
          </p>
        </section>
  
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="font-display text-2xl font-black uppercase mb-6">
            Trasee<span className="text-trail">.</span>
          </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {summerTrailsRoutes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </section>

      <TopoDivider />
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <PartnersSection label="Organizatori" items={summerTrailsOrganizers} />
        <PartnersSection label="Parteneri" items={summerTrailsPartners} />
      </section>
    </main>
  );
}
