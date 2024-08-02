import { Route, Routes } from "react-router-dom";
import { SlidingTabsNav } from "./components/SlidingTabsNav";
import StackedCards from "./pages/StackedCards";
import ParallaxScroll from "./pages/ParallaxScroll";
import Home from "./pages/Home";
import AwwwardsNav from "./pages/AwwwardsNav";
import MaskedCursor from "./pages/MaskedCursor";
import MagneticCursor from "./pages/MagneticCursor";

export default function App() {
  return (
    <main>
      <SlidingTabsNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stacked-cards" element={<StackedCards />} />
        <Route path="/parallax-scroll" element={<ParallaxScroll />} />
        <Route path="/awwwards-nav" element={<AwwwardsNav />} />
        <Route path="/masked-cursor" element={<MaskedCursor />} />
        <Route path="/magnetic-cursor" element={<MagneticCursor />} />
      </Routes>
    </main>
  );
}
