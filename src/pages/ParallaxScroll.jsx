/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];
export default function ParallaxScroll() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // tracking the container
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;

  // use the scrollYProgress to calculate the scroll for the parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

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
    <main className={""}>
      <Spacer>&nbsp;</Spacer>
      <Gallery ref={gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </Gallery>
      <Spacer>&nbsp;</Spacer>
    </main>
  );
}

// component for each column
const Column = ({ images, y }) => {
  return (
    <ColumnContainer style={{ y }}>
      {images.map((src, i) => {
        return (
          <ImageContainer key={i}>
            <img src={`/parallax/${src}`} alt={"image" + src} />
          </ImageContainer>
        );
      })}
    </ColumnContainer>
  );
};

//   styles
const Gallery = styled.div`
  height: 175vh;
  background: rgb(45, 45, 45);
  position: relative;
  display: flex;
  gap: 2vw;
  padding: 2vw;
  box-sizing: border-box;
  overflow: hidden;
`;

const Spacer = styled.div`
  height: 100vh;
`;

const ColumnContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 25%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 2vw;

  &:nth-of-type(1) {
    top: -45%;
  }
  &:nth-of-type(2) {
    top: -95%;
  }
  &:nth-of-type(3) {
    top: -45%;
  }
  &:nth-of-type(4) {
    top: -75%;
  }
`;

const ImageContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 1vw;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;
