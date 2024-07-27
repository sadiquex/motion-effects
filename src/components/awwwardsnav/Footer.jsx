import { motion } from "framer-motion";
import styled from "styled-components";
import { translate } from "./animations";

export default function Footer() {
  return (
    <FooterWrapper>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Made by:</span>Ibrahim Saddik
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Typography:</span> Google Fonts
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Images:</span> Freepik, Envato
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Privacy Policy
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Terms & Conditions
        </motion.li>
      </ul>
    </FooterWrapper>
  );
}

// styles
const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 40px;

  ul {
    width: 50%;
    margin-top: 10px;
    overflow: hidden;
    list-style-type: none;
    padding: 0;
  }

  li {
    span {
      color: #9f9689;
    }
  }

  justify-content: space-between;
  ul {
    width: auto;
  }
`;
