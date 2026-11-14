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
import MediasSummerTrails from "./pages/MediasSummerTrails.jsx";
import BinderbubiRunHike from "./pages/BinderbubiRunHike.jsx";
import Provocare from "./pages/Provocare.jsx";
import CoffeeRun2 from "./pages/CoffeeRun2.jsx";
import Statistici from "./pages/Statistici.jsx"

export default function App() {
  return (
    
     <LightboxProvider>
      <ScrollManager />
      

      <div className="app-layout">
        <Navbar />
      
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trasee" element={<Trasee />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/autism24h" element={<Autism24h />} />
            <Route path="/coffeerun" element={<CoffeeRun />} />
            <Route path="/coffeerun2" element={<CoffeeRun2 />} />
            <Route path="/coffeerunandwine" element={<CoffeeRunAndWine />} />
            <Route path="/summertrails" element={<MediasSummerTrails />} />
            <Route path="/mst" element={<MediasSummerTrails />} />
            <Route path="/asociatie" element={<BinderbubiRunHike />} />
            <Route path="/politica-confidentialitate" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/provocare" element={<Provocare />} />
            <Route path="/statistici" element={<Statistici />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </LightboxProvider>
  );
}
