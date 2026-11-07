import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLightbox } from "../components/Lightbox.jsx";

// ====== DE COMPLETAT ======
const FORM_URL = "https://forms.gle/dLbJozpEtnwXq4Vh8"; // linkul Google Forms pentru înscriere
const EXAMPLE_IMG = "/images/exemplu.webp"; // poza cu traseul exemplu
const OPERATOR = {
  sediu: "Carpenului 16 ap.2, Mediaș",
  cif: "55432693",
  reprezentant: "Cristian Holerga",
  email: "medias.run@gmail.com",
};
// ==========================

const RULES = [
  "Participarea este permisă exclusiv prin alergare.",
  "Traseul trebuie parcurs doar pe străzile din Mediaș.",
  "Traseul trebuie să fie unic și continuu, fără suprapuneri sau intersectări cu propriile segmente.",
  "Punctul de start trebuie să coincidă cu punctul de sosire.",
  "O intersecție poate fi utilizată de mai multe ori, cu condiția ca segmentele traseului să nu se suprapună și să nu se intersecteze.",
  "Nu sunt permise scurtăturile prin curți, proprietăți private, parcuri sau alte spații care nu fac parte din rețeaua stradală.",
  "Orice suprapunere sau intersectare a traseului, precum și orice abatere de la regulament, duce la descalificarea încercării respective.",
  "Poți face oricâte încercări dorești pe toată durata provocării.",
  "Câștigătorul va fi participantul care realizează cel mai lung traseu valid.",
  "Distanța luată în considerare va fi cea validată de organizatori în urma verificării înregistrării GPS.",
  "Acordarea voucherului este condiționată de transmiterea a cel puțin trei trasee validate de către participanți distincți.",
];

const STEPS = [
  "Înscrierea în concurs prin formularul Google Forms pus la dispoziție de organizatori este obligatorie.",
  "Înregistrează fiecare alergare folosind orice aplicație de tracking (Strava, Garmin, Polar etc.).",
  "Publică alergarea pe Facebook, cu textul obligatoriu „Mediaș Summer Trails” și distanța parcursă, exprimată în kilometri.",
  "Etichetează obligatoriu pagina de Facebook Binderbubi Backyard Running în postare.",
  "Pune la dispoziția organizatorilor linkul către înregistrarea activității, pentru verificarea distanței și a traseului.",
];

const CONSENT = [
  "Prelucrarea datelor personale furnizate prin formularul de înscriere, exclusiv în scopul organizării, desfășurării și validării concursului.",
  "Verificarea activităților sportive și a traseelor GPS transmise organizatorilor.",
  "Publicarea numelui, a distanței realizate, a traseului și a rezultatelor pe pagina de Facebook Binderbubi Backyard Running și pe site-ul www.medias.run.",
  "Utilizarea și publicarea informațiilor și materialelor aferente participării, în scopul comunicării și promovării provocării.",
];

const PURPOSES = [
  "Analizării și verificării participărilor;",
  "Validării traseelor și distanțelor înregistrate;",
  "Stabilirea clasamentului;",
  "Desemnării și anunțării câștigătorului.",
];

const RIGHTS = [
  "Dreptul de acces la date;",
  "Dreptul la rectificarea datelor;",
  "Dreptul la ștergerea datelor, în condițiile legii;",
  "Dreptul la restricționarea prelucrării;",
  "Dreptul la portabilitatea datelor, dacă sunt îndeplinite condițiile legale;",
  "Dreptul de a se opune prelucrării, în condițiile legii;",
  "Dreptul de a depune o plângere la ANSPDCP.",
];

function Accordion({ title, children, defaultOpen = false }) {
  return (
    <details
      open={defaultOpen}
      className="group bg-white border border-ink/10 border-l-4 border-l-[#ff751f]"
    >
      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-display font-bold text-lg md:text-xl uppercase [&::-webkit-details-marker]:hidden">
        {title}
        <span className="text-[#ff751f] text-2xl leading-none transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-5 pb-6 text-ink/75 leading-relaxed space-y-3 text-[15px]">
        {children}
      </div>
    </details>
  );
}

const OL = ({ items }) => (
  <ol className="list-decimal pl-5 space-y-2 marker:font-mono marker:text-[#ff751f]">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ol>
);

const UL = ({ items }) => (
  <ul className="list-disc pl-5 space-y-1.5 marker:text-[#ff751f]">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

export default function Provocare() {
  const { openImage } = useLightbox();

  useEffect(() => {
    document.title = "Provocare: Aleargă pe străzile Mediașului | Mediaș Summer Trails";
  }, []);

  return (
    <main className="bg-[#fadfce] min-h-screen">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <Link to="/summertrails" className="inline-block text-ink/60 font-semibold mb-6 hover:text-[#ff751f]">
        ← Mediaș Summer Trails
      </Link>

      {/* Antet + buton care deschide poza exemplu */}
      <div className="bg-ink text-paper p-8 md:p-12 text-center">
        <span className="inline-block bg-[#ff751f] text-ink text-xs font-display font-bold tracking-[0.3em] uppercase px-3 py-1.5 mb-5">
          Provocare
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase leading-[1.15] md:leading-[1.2] mb-4">
          Aleargă pe străzile Mediașului
          <br />
          <span className="text-[#ff751f]">și câștigă o înscriere gratuită</span>
        </h2>
        <p className="text-paper/75 max-w-xl mx-auto mb-8">
          Ai spirit de aventură, îți place să alergi și cunoști străzile Mediașului? Desenează prin
          alergare cel mai lung traseu posibil pe străzile orașului și poți câștiga o înscriere
          gratuită la Mediaș Summer Trails!
        </p>
        {FORM_URL !== "#" && (
          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff751f] text-ink font-display font-bold uppercase tracking-wide px-8 py-4 hover:bg-paper transition-colors"
          >
            Trimite un traseu
          </a>
        )}
      </div>

      {/* Poza cu exemplu de traseu */}
      <figure className="mt-6 bg-white border border-ink/10 p-3">
        <button
          onClick={() => openImage(EXAMPLE_IMG, "Exemplu de traseu valid")}
          className="block w-full cursor-zoom-in"
        >
          <img src={EXAMPLE_IMG} alt="Exemplu de traseu valid" className="w-full h-auto" />
        </button>
        <figcaption className="text-xs text-ink/50 text-center mt-2">
          Exemplu de traseu valid: continuu, fără suprapuneri, start = sosire
        </figcaption>
      </figure>

      {/* Calendar */}
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-ink/10 p-6">
          <p className="font-mono text-xs tracking-widest uppercase text-[#ff751f] mb-2">
            Perioada provocării
          </p>
          <p className="font-display text-2xl font-black uppercase">15 Noiembrie – 15 Decembrie</p>
          <p className="text-sm text-ink/60 mt-2">
            Alergi, încerci și îți depășești propriul record!
          </p>
        </div>
        <div className="bg-white border border-ink/10 p-6">
          <p className="font-mono text-xs tracking-widest uppercase text-[#ff751f] mb-2">
            Anunțarea câștigătorului
          </p>
          <p className="font-display text-2xl font-black uppercase">16 Decembrie</p>
          <p className="text-sm text-ink/60 mt-2">
            Câștigă cel mai lung traseu valid.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Accordion title="1. Regulamentul provocării" defaultOpen>
          <OL items={RULES} />
        </Accordion>

        <Accordion title="2. Cum participi?">
          <OL items={STEPS} />
          <p className="font-semibold text-ink">
            IMPORTANT: Se iau în considerare doar alergările publicate pe Facebook care respectă
            toate cerințele de participare și regulamentul provocării.
          </p>
          {FORM_URL !== "#" && (
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper text-xs font-display font-bold uppercase tracking-wide px-5 py-3 hover:bg-[#ff751f] hover:text-ink transition-colors"
            >
              Formular de înscriere
            </a>
          )}
        </Accordion>

        <Accordion title="3. GDPR și acord privind utilizarea datelor și imaginilor">
          <p>
            Prin înscrierea în concurs, participantul declară că a luat la cunoștință regulamentul
            privind protecția datelor cu caracter personal (GDPR) și își exprimă acordul pentru:
          </p>
          <UL items={CONSENT} />
          <p>
            Datele personale vor fi prelucrate conform legislației aplicabile privind protecția
            datelor cu caracter personal. Participanții își păstrează drepturile prevăzute de GDPR,
            inclusiv dreptul de retragere a consimțământului, acolo unde acesta reprezintă temeiul
            prelucrării.
          </p>
        </Accordion>

        <Accordion title="4. Protecția datelor cu caracter personal (GDPR)">
          <p className="font-semibold text-ink">Operatorul de date cu caracter personal:</p>
          <p>Asociația Binderbubi Run &amp; Hike</p>
          <UL
            items={[
              `Sediul: ${OPERATOR.sediu}`,
              `CIF: ${OPERATOR.cif}`,
              `Reprezentant legal: ${OPERATOR.reprezentant}`,
              `E-mail de contact: ${OPERATOR.email}`,
            ]}
          />
          <p className="font-semibold text-ink pt-2">Scopul prelucrării datelor</p>
          <p>
            Datele cu caracter personal furnizate de participanți prin formularul Google Forms,
            precum și informațiile transmise organizatorilor în cadrul provocării, vor fi
            prelucrate strict în scopul:
          </p>
          <UL items={PURPOSES} />
          <p className="font-semibold text-ink pt-2">Destinatarul datelor</p>
          <p>
            Datele cu caracter personal sunt destinate Asociației Binderbubi Run &amp; Hike, în
            calitate de organizator și operator de date.
          </p>
          <p className="font-semibold text-ink pt-2">Perioada de păstrare</p>
          <p>
            Datele cu caracter personal vor fi păstrate pentru o perioadă de maximum 1 an de la
            data încheierii provocării, după care vor fi șterse sau anonimizate, cu excepția
            datelor a căror păstrare este impusă de lege.
          </p>
          <p className="font-semibold text-ink pt-2">Drepturile participanților</p>
          <p>
            Participanții beneficiază de drepturile prevăzute de Regulamentul (UE) 2016/679
            (GDPR), inclusiv:
          </p>
          <UL items={RIGHTS} />
          <p>
            Solicitările privind exercitarea drepturilor pot fi transmise la adresa de e-mail:{" "}
            {OPERATOR.email}
          </p>
          <p>
            Retragerea consimțământului nu afectează legalitatea prelucrării efectuate anterior
            retragerii. Dacă retragerea consimțământului sau ștergerea datelor face imposibilă
            verificarea participării ori desemnarea câștigătorului, participarea respectivă nu va
            mai putea fi validată.
          </p>
        </Accordion>

        <Accordion title="5. Acord privind publicarea rezultatelor">
          <p>
            Prin înscrierea în provocare, participanții sunt informați că rezultatele concursului
            și informațiile aferente participării pot fi publicate pe:
          </p>
          <UL
            items={[
              "Pagina Facebook Binderbubi Backyard Running;",
              "Site-ul oficial www.medias.run.",
            ]}
          />
          <p>
            Publicarea se va limita la informațiile necesare comunicării rezultatelor și promovării
            provocării, în baza consimțământului separat exprimat de participant, acolo unde acesta
            este necesar.
          </p>
          <p>
            Fotografiile și materialele în care apar participanții vor fi utilizate în scopuri de
            promovare numai în baza unui acord corespunzător.
          </p>
        </Accordion>
      </div>

      <p className="text-center font-display font-black uppercase tracking-wide text-lg mt-10">
        Aleargă. Descoperă. Provoacă-te. <span className="text-[#ff751f]">Câștigă!</span>
      </p>
    </div>
    </main>
  );
}
