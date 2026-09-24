import CountdownTimer from "../components/CountdownTimer.jsx";
import MiniRouteCard from "../components/MiniRouteCard.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import TopoDivider from "../components/TopoDivider.jsx";
import { coffeeRunWineRoutes } from "../data/coffeeRunRoutes.js";
import { summerTrailsOrganizers } from "../data/partners.js";

const EVENT_DATE = new Date("June 19, 2027 09:30:00");

export default function MediasSummerTrails() {
  return (
    <main className="bg-[#fadfce]">
      <section className="bg-[#ff751f]">
        <img
          src="/images/evenimente/summertrails1.png"
          alt="Coffee Run & Wine"
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
          Informații noi în curând...
        </h2>
      </section>

      <TopoDivider />
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <PartnersSection label="Organizatori" items={summerTrailsOrganizers} />
      </section>
    </main>
  );
}
