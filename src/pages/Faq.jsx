const FAQS = [
  {
    q: "Pot să vin dacă nu am experiență?",
    a: "Da! Grupul nostru este deschis oricui. Alergăm în ritm confortabil și nimeni nu rămâne singur pe traseu.",
  },
  {
    q: "Când au loc alergările?",
    a: (
      <>
        De obicei ne întâlnim marți și joi. Ora și ziua exactă sunt anunțate pe{" "}
        <a
          href="https://www.facebook.com/people/Binderbubi-Backyard-Running/61571813673482/"
          target="_blank"
          rel="noreferrer"
          className="text-trail font-semibold hover:underline"
        >
          grupul de Facebook.
        </a>
      </>
    ),
  },
];

export default function Faq() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-display text-4xl md:text-5xl font-black uppercase mb-12">
        Întrebări <span className="text-trail">Frecvente</span>
      </h1>
      <div className="space-y-5">
        {FAQS.map((item) => (
          <div key={item.q} className="bg-white border-l-4 border-trail p-6 shadow-sm">
            <h3 className="font-display font-bold text-xl mb-2">{item.q}</h3>
            <p className="text-ink/70 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
