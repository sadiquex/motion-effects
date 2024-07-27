import styled from "styled-components";
import { projects } from "../data";
import Card from "../components/Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export default function StackedCards() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // lenis scroll for smooth scrolling - can be removed
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <MainContainer ref={container}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  position: relative;
  margin-top: 50vh;
`;
