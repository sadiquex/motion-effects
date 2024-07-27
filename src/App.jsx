import { Route, Routes } from "react-router-dom";
import { SlidingTabsNav } from "./components/SlidingTabsNav";
import StackedCards from "./pages/StackedCards";
import ParallaxScroll from "./pages/ParallaxScroll";
import Home from "./pages/Home";
import AwwwardsNav from "./components/AwwwardsNav";

export default function App() {
  return (
    <main>
      <SlidingTabsNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stacked-cards" element={<StackedCards />} />
        <Route path="/parallax-scroll" element={<ParallaxScroll />} />
        <Route path="/awwwards-nav" element={<AwwwardsNav />} />
      </Routes>
    </main>
  );
}
