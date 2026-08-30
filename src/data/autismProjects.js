const laptopImages = [1, 2, 4, 6, 5, 7, 3].map(
  (n) => `/images/proiecte_autism24h/binderbubi/laptop/${n}.webp`,
);

export const binderbubiProjects = [
  {
    id: "b1",
    title: "Kit MELOTERAPIE",
    logo: "/images/proiecte_autism24h/logo/meloterapie.webp",
    text: "În curând.",
    images: ["/images/logo-bbr.webp"],
  },
  {
    id: "b2",
    title: "KIT Terapie prin SPORT",
    logo: "/images/proiecte_autism24h/logo/sport.webp",
    text: "În curând.",
    images: ["/images/logo-bbr.webp"],
  },
  {
    id: "b3",
    title: "KIT Academia Spațiului",
    logo: "/images/proiecte_autism24h/logo/spatiu.webp",
    text: "În curând.",
    images: ["/images/logo-bbr.webp"],
  },
  {
    id: "b4",
    title: "CUTIA LOGOPEDICĂ",
    logo: "/images/proiecte_autism24h/logo/logopedica.webp",
    text: "În curând.",
    images: ["/images/logo-bbr.webp"],
  },
  {
    id: "b5",
    title: "LAPTOP",
    logo: "/images/proiecte_autism24h/logo/laptop.webp",
    text: `David-Andrei, în prezent elev în clasa a XII-a la Liceul „Octavian Goga” din Huedin, este un tânăr adult neurodivergent a cărui poveste redefinește imposibilul. Diagnosticat la doar trei ani cu autism infantil sever, medicii i-au prezis atunci un viitor sumbru, considerându-l profund afectat pe toate palierele de dezvoltare.

Însă David a contrazis toate pronosticurile negative. Susținut de familie și ghidat prin terapii potrivite, el a demonstrat că locul copiilor atipici este chiar în rândul celor tipici. Recuperarea sa remarcabilă s-a transformat rapid în dorința de a dărui mai departe. În fiecare zi, David devine terapeut pentru frații săi mai mici, autiști nonverbali. Folosind principiile programului NACD, el se joacă și lucrează cu ei pentru a-i ajuta să progreseze.

David visează la o societate mai caldă și mai incluzivă pentru sine și pentru toți cei ca el. Aproape de pragul absolvirii, el își privește viitorul cu optimism, căutând cariera potrivită pe care să o urmeze după finalizarea liceului.`,
    images: laptopImages,
  },
];

export const beanRoastersProjects = [
  {
    id: "br1",
    title: "Kit MELOTERAPIE",
    logo: "/images/proiecte_autism24h/logo/meloterapie.webp",
    text: "În curând.",
    images: ["/images/bean_roasters_running.webp"],
  },
  {
    id: "br2",
    title: "KIT Terapie prin SPORT",
    logo: "/images/proiecte_autism24h/logo/sport.webp",
    text: "În curând.",
    images: ["/images/bean_roasters_running.webp"],
  },
  {
    id: "br3",
    title: "KIT Academia Spațiului",
    logo: "/images/proiecte_autism24h/logo/spatiu.webp",
    text: "În curând.",
    images: ["/images/bean_roasters_running.webp"],
  },
  {
    id: "br4",
    title: "CUTIA LOGOPEDICĂ",
    logo: "/images/proiecte_autism24h/logo/logopedica.webp",
    text: "În curând.",
    images: ["/images/bean_roasters_running.webp"],
  },
  {
    id: "br5",
    title: "LAPTOP",
    logo: "/images/proiecte_autism24h/logo/laptop.webp",
    text: "În curând.",
    images: ["/images/bean_roasters_running.webp"],
  },
];

export const allAutismProjects = [...binderbubiProjects, ...beanRoastersProjects];
