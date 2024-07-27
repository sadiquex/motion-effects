/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { blur, translate } from "./animations";

export default function Body({ links, selectedLink, setSelectedLink }) {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <BodyWrapper>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </BodyWrapper>
  );
}

// styles
const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;

  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }

  p {
    margin: 0px;
    display: flex;
    overflow: hidden;
    font-size: 32px;
    padding-right: 30px;
    padding-top: 10px;
    font-weight: 300;
  }

  @media only screen and (min-width: 1000px) {
    max-width: 1200px;
    margin-top: 80px;

    p {
      font-size: 5vw;
      padding-right: 2vw;
    }
  }
`;
