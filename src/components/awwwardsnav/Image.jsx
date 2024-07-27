/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { opacity } from "./animations";
import styled from "styled-components";

export default function Image({ src, isActive }) {
  return (
    <ImageContainer
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
    >
      <img src={`/awwwards-nav/${src}`} alt="image" />
    </ImageContainer>
  );
}

// styles
const ImageContainer = styled(motion.div)`
  display: none;

  display: block;
  width: 500px;
  height: 450px;
  position: relative;

  img {
    object-fit: cover;
  }
`;
