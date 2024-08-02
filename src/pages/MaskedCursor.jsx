import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import useMousePosition from "../components/masked-cursor/useMousePosition";

export default function MaskedCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <MainContainer>
      <MaskedContainer>
        <Mask
          className="mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            A creative developer - blending code and artistry to build engaging
            and innovative digital experiences.
          </p>
        </Mask>

        <MaskedBody className="body">
          <p>
            I&apos;m a <span>selectively skilled</span> developer with strong
            focus on producing high quality & impactful digital experience.
          </p>
        </MaskedBody>
      </MaskedContainer>
    </MainContainer>
  );
}

// styles

const MainContainer = styled.div`
  background-color: #0f0f0f;
`;

const MaskedContainer = styled.main`
  height: 100vh;

  & .mask,
  & .body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #afa18f;
    font-size: 64px;
    font-weight: bold;
    line-height: 66px;
    cursor: default;

    p {
      width: 1000px;
      padding: 40px;
    }
    span {
      color: #ec4e39;
    }
  }
`;

const Mask = styled(motion.div)`
  &.mask {
    mask-image: url("/masked-cursor/mask.svg");
    mask-repeat: no-repeat;
    mask-size: 40px;
    background: #ec4e39;
    position: absolute;
    color: black;
  }
`;

const MaskedBody = styled.div`
  /* background-color: red; */
`;
