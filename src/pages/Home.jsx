import { Link } from "react-router-dom";
import EventsGrid from "../components/EventsGrid.jsx";
import GallerySlider from "../components/GallerySlider.jsx";
import HighFiveButton from "../components/HighFiveButton.jsx";
import TopoDivider from "../components/TopoDivider.jsx";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[480px] flex items-end overflow-hidden">
        <img
          src="/images/hero1.webp"
          alt="Binderbubi Backyard Running"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-20">
          <span className="inline-block bg-trail text-paper text-xs font-display font-bold tracking-[0.3em] uppercase px-3 py-1.5 mb-6">
            Mediaș • România
          </span>
          <h1 className="font-display text-[13vw] md:text-8xl leading-[0.85] font-black uppercase text-paper mb-6">
            Binderbubi
            <br />
            <span className="text-trail-light">Backyard Running</span>
          </h1>
          <p className="text-paper/80 max-w-lg text-base md:text-lg mb-8">
            O comunitate unită de pasiune, energie și dorința de a fi mai buni
            în fiecare zi.
          </p>
          <Link
            to="/trasee"
            className="inline-flex items-center gap-3 bg-trail text-paper font-display font-bold uppercase tracking-wide px-8 py-4 hover:bg-paper hover:text-ink transition-colors"
          >
            Vezi traseele
          </Link>
        </div>
      </section>
      <TopoDivider className="-mt-1" />

      {/* EVENIMENTE */}
      <section
        id="evenimente"
        className="max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-10">
          Evenimente în zonă<span className="text-trail">.</span>
        </h2>
        <EventsGrid />
      </section>

      {/* DESPRE NOI */}
      <section id="despre-noi" className="border-t border-ink/10 bg-white/40">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-6">
            Despre <span className="text-trail">Noi</span>
          </h2>
          <p className="font-display text-xl md:text-2xl font-bold mb-6">
            Aleargă cu noi în inima naturii!
          </p>
          <p className="text-ink/70 text-lg mb-5 leading-relaxed">
            <strong className="text-ink">Binderbubi Backyard Running</strong> nu
            este doar un grup de alergare, ci o comunitate vibrantă care te
            invită să descoperi bucuria mișcării autentice. Ne întâlnim periodic
            pentru a explora potecile pitorești din zona Mediașului.
          </p>
          <p className="text-ink/70 text-lg mb-8 leading-relaxed">
            Credem că dealurile și traseele stradale sunt pentru toată lumea.
            Organizăm sesiuni adaptate pentru{" "}
            <strong className="text-ink">toate nivelurile de experiență</strong>
            .
          </p>

          <div className="border-y border-ink/10 py-8">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] uppercase mb-6">
              De ce să faci parte din povestea noastră?
            </h3>
            <ul className="space-y-4">
              {[
                [
                  "Depășește-ți limitele:",
                  "Într-un cadru prietenos, provocările devin realizări.",
                ],
                [
                  "Energie pură:",
                  "Atmosfera de grup te va face să uiți de oboseală.",
                ],
                [
                  "Natură și comunitate:",
                  "Descoperi locuri noi alături de oameni pasionați.",
                ],
                [
                  "Zero presiune:",
                  "Punem preț pe camaraderie și stare de bine.",
                ],
              ].map(([bold, rest]) => (
                <li key={bold} className="flex gap-3 text-lg text-ink/80">
                  <span className="text-trail font-black">•</span>
                  <span>
                    <strong className="text-ink">{bold}</strong> {rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-ink/70 text-lg mt-8 leading-relaxed">
            Vino să simți energia „curții noastre din spate”! Te așteptăm să
            scriem împreună următorul kilometru.
          </p>
        </div>
      </section>

      {/* ACTIVITATE */}
      <section
        id="activitate"
        className="max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-10">
          Activitate<span className="text-trail">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <Link
            to="/autism24h"
            className="group border border-ink/10 bg-white p-8 hover:border-trail hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <span className="text-trail font-mono text-xs tracking-widest uppercase">
              Eveniment anual
            </span>
            <h3 className="font-display text-2xl font-black uppercase mt-2 mb-3">
              Autism 24h
            </h3>
            <p className="text-ink/70 mb-6">
              Alergăm 24 de ore non-stop pentru a susține copiii cu autism. Un
              test de anduranță pentru o cauză nobilă.
            </p>
            <span className="font-display font-bold text-trail">Detalii →</span>
          </Link>

          <a
            href="https://www.facebook.com/people/Binderbubi-Backyard-Running/61571813673482/"
            target="_blank"
            rel="noreferrer"
            className="group bg-ink text-paper p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <span className="text-trail-light font-mono text-xs tracking-widest uppercase">
              Săptămânal
            </span>
            <h3 className="font-display text-2xl font-black uppercase mt-2 mb-3">
              Alergări în grup
            </h3>
            <p className="text-paper/70 mb-6">
              Explorăm împreună Mediașul și împrejurimile, alternând asfaltul cu
              trail-ul.
            </p>
            <span className="font-display font-bold text-trail-light">
              Vezi programul pe Facebook →
            </span>
          </a>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie">
        <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20">
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-10">
            Galerie foto<span className="text-trail">.</span>
          </h2>
        </div>
        <GallerySlider /> <br></br>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-ink/10">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-6">
            Hai să <span className="text-trail">vorbim</span>
          </h2>
          <p className="text-ink/70 text-lg mb-8">
            Ai întrebări despre trasee sau vrei să te alături grupului?
            Contactează-ne oricând:
          </p>
          <div className="flex flex-col items-center gap-5">
            <span className="font-display font-bold text-xl border-b-2 border-trail pb-1">
              medias.run@gmail.com
            </span>
            <a
              href="mailto:medias.run@gmail.com"
              className="inline-flex items-center gap-2 bg-trail text-paper font-display font-bold uppercase tracking-wide px-8 py-4 hover:bg-ink transition-colors"
            >
              Trimite email
            </a>
          </div>
        </div>
      </section>

      {/* HIGH FIVE */}
      <section className="border-t border-ink/10 text-center pb-6">
        <HighFiveButton />
      </section>
    </main>
  );
}
