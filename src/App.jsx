import styled from "styled-components";
import Card from "./components/Card";
import { projects } from "./data";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { SlidingTabsNav } from "./components/SlidingTabsNav";

export default function App() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main>
      <SlidingTabsNav />
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
    </main>
  );
}

const MainContainer = styled.main`
  position: relative;
  margin-top: 50vh;
`;
