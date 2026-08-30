import routes from "../data/routes.js";
import RouteCard from "../components/RouteCard.jsx";

export default function Trasee() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-display text-4xl md:text-5xl font-black uppercase mb-3">
        Trasee <span className="text-trail">Recomandate</span>
      </h1>
      <p className="text-ink/60 max-w-xl mb-12">
        Șapte trasee testate în jurul Mediașului, de la bucle scurte de oraș la ture de 21 km pe
        Via Transilvanica. Fiecare card arată profilul de elevație și oferă fișierul GPX pentru
        ceas sau telefon.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </main>
  );
}
