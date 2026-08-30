import { useEffect, useState } from "react";

const HIT_URL = "https://api.counterapi.dev/v2/andrei-holergas-team-3535/batepalma/up";

export default function HighFiveButton() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("hasHighFived") === "true") setClicked(true);
  }, []);

  async function handleClick() {
    if (clicked) return;
    setClicked(true);
    try {
      await fetch(HIT_URL);
      localStorage.setItem("hasHighFived", "true");
    } catch (err) {
      console.error("Counter API error:", err);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <h2 className="font-display text-3xl md:text-4xl font-black uppercase">Bate palma!</h2>
      <button
        onClick={handleClick}
        disabled={clicked}
        aria-label="Bate palma"
        className="rounded-full transition-transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
      >
        <img
          src={clicked ? "/images/thumbsup.webp" : "/images/highfive.webp"}
          alt="highfive"
          className="w-32 md:w-40"
        />
      </button>
      <p
        className={`font-body font-semibold text-sm text-center transition-opacity duration-500 ${
          clicked ? "opacity-100" : "opacity-0"
        }`}
      >
        Te așteptăm la alergările de grup ca să batem palma fizic!
      </p>
    </div>
  );
}
