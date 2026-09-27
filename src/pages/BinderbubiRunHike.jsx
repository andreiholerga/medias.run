import { Link } from "react-router-dom";
import EventsGrid from "../components/EventsGrid.jsx";
import GallerySlider from "../components/GallerySlider.jsx";
import HighFiveButton from "../components/HighFiveButton.jsx";
import TopoDivider from "../components/TopoDivider.jsx";
import {events, brhEvents} from "../data/events.js";

export default function Home() {
  return (
    <main>
      <title>Binderbubi Run & Hike | Mediaș</title>
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[480px] flex items-end overflow-hidden">
        <img
          src="/images/hero1.webp"
          alt="Binderbubi Run & Hike"
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
            <span className="text-trail-light">Run & Hike</span>
          </h1>
          <p className="text-paper/80 max-w-lg text-base md:text-lg mb-8">
           Un nou început. Aceeași pasiune. Un proiect care merge mai departe.
          </p>

        </div>
      </section>
      <TopoDivider className="-mt-1" />

      {/* EVENIMENTE */}
      <section
        id="evenimenteBRH"
        className="max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-10">
          Evenimente Binderbubi Run & Hike<span className="text-trail">.</span>
        </h2>
        <EventsGrid events={brhEvents} />
      </section>

      {/* DESPRE NOI */}
      <section id="despre-noi" className="border-t border-ink/10 bg-white/40">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-6">
            Un nou <span className="text-trail">început</span>
          </h2>
          <p className="text-ink/70 text-lg mb-5 leading-relaxed">
            Zilele acestea am făcut un pas important: am înființat Asociația <strong className="text-ink">Binderbubi Run & Hike</strong>, ca o continuare firească a activității începute în 18 ianuarie 2025.
          </p>
          <p className="text-ink/70 text-lg mb-8 leading-relaxed">
            A pornit de la câțiva pași, câteva alergări și dorința de a aduce oamenii împreună prin sport. În timp, proiectul a crescut, iar astăzi simțim că este momentul să îi dăm o formă care să ne permită să construim mai mult.
          </p>

          <div className="border-y border-ink/10 py-8">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] uppercase mb-6">
              Direcții de dezvoltare:
            </h3>

            <ul className="space-y-4">

                <li>
                  <span className="text-trail font-black">•</span>
                  <span>
                    <strong className="text-ink"> Alergări de grup</strong>, săptămânale, în fiecare marți și joi, pentru că sportul este mai frumos atunci când îl facem împreună.
                  </span>
                </li>
                <li>
                  <span className="text-trail font-black">•</span>
                  <span>
                    <strong className="text-ink"> Programe de prevenție și conștientizare</strong>, pentru a crește siguranța celor care aleargă, merg pe bicicletă sau practică sportul în aer liber.
                  </span>
                </li>
                <li>
                  <span className="text-trail font-black">•</span>
                  <span>
                    <strong className="text-ink"> Organizarea de competiții de alergare</strong> și dezvoltarea unor parteneriate pentru organizarea și susținerea unor astfel de evenimente.
                  </span>
                </li>
                <li>
                  <span className="text-trail font-black">•</span>
                  <span>
                    <strong className="text-ink"> Implicarea în acțiuni caritabile</strong>, prin proiecte care să aducă un plus comunității medieșene și oamenilor care au nevoie de sprijin.
                  </span>
                </li>

            </ul>
          </div>

          <p className="text-ink/70 text-lg mt-8 leading-relaxed">
            Toate acestea nu ar fi fost posibile fără voi.
</p><p className="text-ink/70 text-lg mt-8 leading-relaxed">
Vă mulțumim celor care ne-ați fost alături, celor care ne-ați susținut, ne-ați aplaudat, ne-ați încurajat sau pur și simplu ne-ați urmărit din umbră. Fiecare mesaj, fiecare alergare împreună și fiecare gest de susținere a însemnat ceva.
</p><p className="text-ink/70 text-lg mt-8 leading-relaxed">
Acum deschidem un nou capitol. Și ne dorim să îl scriem împreună cu voi.
</p><p className="text-ink/70 text-lg mt-8 leading-relaxed">
Vă așteptăm alături de Binderbubi Run & Hike!
Pentru că, indiferent cât de lung este drumul, împreună putem merge mai departe. 
       </p>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="border-t border-ink/10">
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-6">
            Hai să <span className="text-trail">vorbim</span>
          </h2>
          <p className="text-ink/70 text-lg mb-8">
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

    </main>
  );
}
