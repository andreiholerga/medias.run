import { Link } from "react-router-dom";

export default function ChallengeTeaser() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-14">
      <div className="bg-ink text-paper p-8 md:p-12 text-center">
        <span className="inline-block bg-[#ff751f] text-ink text-xs font-display font-bold tracking-[0.3em] uppercase px-3 py-1.5 mb-5">
          Provocare
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase leading-[1.15] md:leading-[1.2] mb-4">
          Câștigă o înscriere gratuită
          <br />
          <span className="text-[#ff751f]">Aleargă pe străzile Mediașului</span>
        </h2>
        <p className="text-paper/75 max-w-xl mx-auto mb-3">
          Desenează prin alergare cel mai lung traseu posibil pe străzile orașului.
        </p>
        <p className="font-mono text-sm text-paper/60 mb-8">15 noiembrie – 15 decembrie</p>
        <Link
          to="/provocare"
          className="inline-flex items-center gap-2 bg-[#ff751f] text-ink font-display font-bold uppercase tracking-wide px-8 py-4 hover:bg-paper transition-colors"
        >
          Acceptă provocarea →
        </Link>
      </div>
    </section>
  );
}
