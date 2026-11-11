import CountdownTimer from "../components/CountdownTimer.jsx";
import MiniRouteCard from "../components/MiniRouteCard.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import TopoDivider from "../components/TopoDivider.jsx";
import { coffeeRunRoutes6Dec } from "../data/eventRoutes.js";
import { coffeeRunOrganizers6Dec, coffeeRunPartners6Dec, coffeeRunBeneficiari6Dec } from "../data/partners.js";

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
        <br />
        <p className="text-trail font-semibold mb-4">
          Descarcă regulamentul:
        </p>
        <div className="flex flex-wrap justify-center mb-8">
          <a
            href="/regulament/regulament_medias_coffee_run.pdf"
            download
            className="inline-flex items-center gap-2 bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-5 py-3 hover:bg-trail transition-colors"
          >
            <span>⬇</span> Regulament
          </a>
        </div>
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

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="font-display text-2xl font-black uppercase mb-4">
          Regulament<span className="text-trail">.</span>
        </h2>
<p>
📅 6 Decembrie 2026<br />
📍 Mediaș- Aterm<br />
🕧 Start eveniment: 12:30<br /><br />
Vă invităm la o alergare caritabilă dedicată mișcării, comunității și, cel mai important, ajutorării celor care au nevoie de noi!<br />
!! Evenimentul nu este o competiție!<br />
!! Nu există clasamente sau timpi oficiali!! <br />
Fiecare participant este încurajat să parcurgă traseul ales în ritmul propriu și să se bucure de experiență.<br /><br />
🏃 TRASEE<br />
Aveți la dispoziție trei variante:<br />
🔹 4-5 km – UȘOR<br />
Traseu accesibil tuturor, potrivit inclusiv pentru cei care sunt la început.<br />
🔹 10 km – UȘOR/Mediu<br />
Traseu cu aproximativ 100 m diferență de nivel, recomandat persoanelor obișnuite cu alergarea pe teren variat și cu urcările.<br /><br />
📝 ÎNSCRIERI<br />
Înscrierile se fac fizic până la data de 5 decembrie la <br />
📍 The Bean Centru <br />
📍 The Bean Avram Iancu<br />
The Bean kaufland <br /><br />
💰 Taxa de participare<br />
👧 Copii până la 10 ani: gratuit<br />
🧒 10–16 ani: 20 lei – donație<br />
🧑 16+ ani: 30 lei<br />
Înscrierile efectuate la fața locului, în ziua evenimentului, presupun o taxă suplimentară de 10 lei.<br />
O mare parte din sumele colectate reprezintă donații pentru cauza caritabilă !<br /><br />
👨‍👩‍👧 PARTICIPAREA COPIILOR<br />
Copii de sub 10 ani se pot inscrie la cursa copiilor de 500 m! <br />
Copiii cu vârsta între 10 și 14 ani nu pot participa neînsoțiți și trebuie să fie însoțiți pe traseu de un adult responsabil.<br /><br />
🎒 ECHIPAMENT <br />
Pentru siguranța tuturor participanților, este recomandat să aveți:<br />
👟 Pantofi de alergare cu talpă cu profil montan<br />
📱 Telefon mobil, cu bateria suficient de încărcată !<br />
💧 Recipient propriu pentru apă – la punctele de hidratare nu vor fi disponibile pahare<br />
🍫 Cel puțin un gel și/sau baton nutritiv<br /><br />
Recomandăm să aveți la voi:<br />
☀️ cremă de protecție solară;<br />
🌬️ foiță de vânt;<br />
🧢 bentiță / buff / șapcă;<br />
🏥 asigurare medicală valabilă în ziua evenimentului;<br /><br />
🐕 ANIMALE DE COMPANIE<br />
Participarea cu animale de companie NU ESTE PERMISĂ întrucât există ferme si alți câini in zonă!<br />
Traseele pot include zone în care participanții se pot întâlni cu câini, iar pentru siguranța participanților și a animalelor, accesul cu animale de companie pe traseele evenimentului este interzis.<br />
În cazul întâlnirii cu câini pe traseu, participanții sunt rugați să păstreze calmul, să evite interacțiunea cu aceștia și să urmeze indicațiile voluntarilor, dacă aceștia sunt prezenți.<br /><br />
🌿 COMPORTAMENT PE TRASEU<br />
Pentru ca toată lumea să se bucure de eveniment, vă rugăm:<br />
să respectați marcajele și indicațiile organizatorilor și voluntarilor;<br />
să nu părăsiți traseul stabilit;<br />
să nu aruncați deșeuri pe traseu;<br />
să respectați natura și proprietățile din zonă;<br />
să acordați atenție celorlalți participanți;<br />
să urmați indicațiile organizatorilor în cazul unor situații neprevăzute.<br />
Vă rugăm să păstrăm traseul curat. Dacă ați venit cu un ambalaj, îl puteți păstra până la următorul punct de colectare.<br /><br />
⚠️ SIGURANȚĂ ȘI RESPONSABILITATE<br />
Participarea la eveniment se face pe propria răspundere.<br />
Minorii au nevoie de acordul părinților!<br />
Fiecare participant este responsabil să aleagă traseul în funcție de propria condiție fizică, experiență și starea de sănătate.<br />
În cazul unor condiții meteorologice nefavorabile sau al altor situații care pot pune în pericol participanții, organizatorii își rezervă dreptul de a modifica traseele, ora de start, de a amâna sau de a opri evenimentul, dacă situația o impune.<br /><br />
📸 FOTO & VIDEO<br />
Pe parcursul evenimentului pot fi realizate fotografii și materiale video.<br />
Prin participarea la eveniment, sunteți de acord ca imaginile realizate în timpul acestuia să poată fi utilizate în scopul promovării evenimentului caritabil și a cauzei susținute.<br /><br />
❤️ DESPRE EVENIMENT<br />
Această alergare nu este despre cine ajunge primul.<br />
Cursa este fara cronometraj!<br />
Este despre mișcare, oameni, comunitate și dorința de a face un bine împreună.<br />
Fie că alegi 4  sau 10 km, fiecare pas contează.<br />
Ne vedem pe 6 Decembrie! 🏃‍♀️🏃‍♂️❤️<br />
Start: 12:30 | Aterm, Mediaș <br /><br />
📞 CONTACT<br />
0740 649 378
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
        <PartnersSection label="Parteneri" items={coffeeRunPartners6Dec} />
        <PartnersSection label="Beneficiari" items={coffeeRunBeneficiari6Dec} />
      </section>
    </main>
  );
}
