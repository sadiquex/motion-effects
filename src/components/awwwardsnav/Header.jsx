import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { background, opacity } from "./animations";
import Navigation from "./Navigation";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderContainer>
      <Bar>
        <Link href="/">Sadique</Link>
        <El
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {/* toggle hamburger */}
          <Burger className={`${isActive ? "burgerActive" : ""}`}></Burger>
          {/* label */}
          <Label>
            <motion.p
              // switch the opacity depending on the variants and state
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </Label>
        </El>
        <ShopContainer
          // variants={opacity}
          animate={!isActive ? "open" : "closed"}
        >
          <Shop>Shop</Shop>
          <El>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z"
                stroke="#4D3D30"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p>Cart(0)</p>
          </El>
        </ShopContainer>
      </Bar>
      <Background
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
      ></Background>
      <AnimatePresence mode="wait">
        {isActive && <Navigation />}
      </AnimatePresence>
    </HeaderContainer>
  );
}
// styles
// header
const HeaderContainer = styled.div`
  background-color: #f4f0ea;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;

  @media only screen and (min-width: 600px) {
    padding: 20px;
  }
`;

const Bar = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  position: relative;

  p {
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: black;
    position: absolute;
    left: 0;
  }

  @media only screen and (min-width: 600px) {
    font-size: 15px;
  }
`;

const El = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

const Burger = styled.div`
  width: 22.5px;
  position: relative;
  pointer-events: none;

  &::after,
  &::before {
    content: "";
    height: 1px;
    width: 100%;
    background-color: black;
    position: relative;
    display: block;
    transition: all 1s cubic-bezier(0.76, 0, 0.24, 1);
  }

  &::after {
    top: -4px;
  }

  &::before {
    top: 4px;
  }

  /* active class */
  &.burgerActive {
    &::after {
      transform: rotate(45deg);
      top: -1px;
    }

    &::before {
      transform: rotate(-45deg);
      top: 1px;
    }
  }
`;

const Label = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  /* change the opacityy depending on whether the navbar is active or not */
  p {
    &:nth-of-type(2) {
      position: absolute;
      opacity: 0;
    }
  }
`;

const ShopContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 30px;
  position: absolute;
  right: 0;
`;

const Shop = styled.div`
  display: none;

  @media only screen and (min-width: 600px) {
    display: block;
    cursor: pointer;
  }
`;

const Background = styled(motion.div)`
  background-color: black;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
`;
