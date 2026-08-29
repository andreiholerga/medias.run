import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import { LightboxProvider } from "./components/Lightbox.jsx";

import Home from "./pages/Home.jsx";
import Trasee from "./pages/Trasee.jsx";
import Faq from "./pages/Faq.jsx";
import Autism24h from "./pages/Autism24h.jsx";
import CoffeeRun from "./pages/CoffeeRun.jsx";
import CoffeeRunAndWine from "./pages/CoffeeRunAndWine.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <LightboxProvider>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trasee" element={<Trasee />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/autism24h" element={<Autism24h />} />
        <Route path="/coffeerun" element={<CoffeeRun />} />
        <Route path="/coffeerunandwine" element={<CoffeeRunAndWine />} />
        <Route path="/politica-confidentialitate" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </LightboxProvider>
  );
}
