/* eslint-disable react/prop-types */

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <CardContainer ref={container}>
      <CardWrapper
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <Title>{title}</Title>
        <CardDesc>
          <DescriptionContainer>
            <p>{description}</p>
            <span>
              <button>
                <a href={url} target="_blank">
                  See more
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </button>
            </span>
          </DescriptionContainer>

          <ImageContainer>
            <ImageInnerContainer
              style={{
                scale: imageScale,
              }}
            >
              <img src={src} alt={title} className="" />
            </ImageInnerContainer>
          </ImageContainer>
        </CardDesc>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  /* the card become sticky when they reach top 0 */
  top: 0px;
  font-family: "Advent Pro", sans-serif;
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -25%;
  height: 500px;
  width: 1000px;
  border-radius: 25px;
  padding: 50px;
  transform-origin: top;
  h2 {
    text-align: center;
    margin: 0px;
    font-size: 28px;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 12px;
`;

const CardDesc = styled(motion.div)`
  display: flex;
`;

const DescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 24px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 2px solid black;
    background: transparent;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: black;
      color: white;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  position: relative;
  /* width: 60%; */
  height: 30%;
  border-radius: 25px;
  overflow: hidden;
`;

const ImageInnerContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
  }
`;
