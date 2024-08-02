/* eslint-disable react/prop-types */
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import styled from "styled-components";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticCursor() {
  return (
    <Container>
      <MagnetEffect>
        <FaFacebookF color="#f4f0ea" size={40} />
      </MagnetEffect>

      <MagnetEffect>
        <FaTwitter color="#f4f0ea" size={40} />
      </MagnetEffect>

      <MagnetEffect>
        <FaYoutube color="#f4f0ea" size={40} />
      </MagnetEffect>

      <MagnetEffect>
        <FaSquareInstagram color="#f4f0ea" size={40} />
      </MagnetEffect>
    </Container>
  );
}

function MagnetEffect({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// styles
const Container = styled.div`
  background-color: black;
  height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    height: 50px;
    padding: 50px;
    fill: #c8bdb0;
    transition: fill 0.2s;
    cursor: pointer;
    &:hover {
      fill: #ec4e39;
    }
  }
  p {
    color: #494136;
  }
`;
