import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <Link to="/" className="inline-block text-trail font-semibold mb-6 hover:underline">
        ← Înapoi la prima pagină
      </Link>
      <h1 className="font-display text-4xl md:text-5xl font-black uppercase mb-4">
        Politică de <span className="text-trail">Confidențialitate</span>
      </h1>
      <p className="text-ink/50 mb-10">Ultima actualizare: 28 Martie 2026</p>

      <div className="space-y-8 text-ink/75 leading-relaxed">
        <section>
          <h2 className="font-display font-bold text-trail text-lg mb-2">1. Cine suntem</h2>
          <p>
            Site-ul <strong className="text-ink">Binderbubi Backyard Running</strong> (medias.run)
            este un site de prezentare pentru comunitatea de alergători din Mediaș{" "}
            <strong className="text-ink">Binderbubi Backyard Running</strong>. Ne puteți contacta la
            adresa de email: <strong className="text-ink">medias.run@gmail.com</strong>.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-trail text-lg mb-2">2. Ce date colectăm</h2>
          <p>
            Site-ul nostru este configurat pentru a respecta confidențialitatea vizitatorilor.{" "}
            <strong className="text-ink">Nu colectăm date cu caracter personal</strong> (nume,
            telefon, adrese) prin intermediul acestui site, deoarece nu folosim formulare de
            contact sau conturi de utilizator.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-trail text-lg mb-2">3. Module Cookie</h2>
          <p>
            Acest site nu utilizează module cookie proprii de urmărire sau marketing. Putem folosi
            doar cookie-uri tehnice, strict necesare, furnizate de platforma de găzduire
            (InfinityFree) sau serviciul de securitate (Cloudflare) pentru a asigura navigarea în
            siguranță și protecția împotriva atacurilor cibernetice.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-trail text-lg mb-2">4. Servicii terțe</h2>
          <p>
            Site-ul conține link-uri către platforme externe (Facebook, Google Photos). Odată ce
            accesați aceste link-uri, vă rugăm să consultați politicile de confidențialitate ale
            respectivelor platforme, deoarece acestea pot colecta date conform propriilor reguli.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-trail text-lg mb-2">5. Drepturile utilizatorului</h2>
          <p>
            Conform GDPR, aveți dreptul de a fi informat cu privire la procesarea datelor. Deoarece
            nu stocăm datele dumneavoastră, nu există baze de date din care să solicităm ștergerea
            sau modificarea acestora.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-trail text-lg mb-2">6. Contact</h2>
          <p>
            Pentru orice întrebări legate de această politică, ne puteți scrie la{" "}
            <strong className="text-ink">medias.run@gmail.com</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
