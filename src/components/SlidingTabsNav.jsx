/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SlidingTabsNav = () => {
  return (
    <NavContainer>
      <SlideTabs />
    </NavContainer>
  );
};

// list
const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <NavUl
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0, // remove opacity when mouse leaves the elemeent
        }));
      }}
    >
      {[
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Stacked Cards",
          link: "/stacked-cards",
        },
        {
          label: "Parallax Scroll",
          link: "/parallax-scroll",
        },
        {
          label: "Navigation",
          link: "/awwwards-nav",
        },
      ].map((navItem, i) => (
        <Tab key={i} setPosition={setPosition}>
          <Link to={navItem.link}>{navItem.label}</Link>
        </Tab>
      ))}

      <Cursor position={position} />
    </NavUl>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <NavLi
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft, // use the offsetLeft value to set the left position on li
          width,
          opacity: 1,
        });
      }}
    >
      {children}
    </NavLi>
  );
};

const Cursor = ({ position }) => {
  return (
    <CursorLi
      animate={{
        ...position,
      }}
    />
  );
};

// styling
const NavContainer = styled.div`
  background: #f6f7f8;
  padding: 80px 0;
  font-family: "Advent Pro", sans-serif;
`;

const NavUl = styled.ul`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 8px;
  width: fit-content;
  border-radius: 9999px;
  border: 2px solid black;
  background-color: white;
  padding: 0.25rem;
`;

const NavLi = styled.li`
  position: relative;
  z-index: 10;
  display: block;
  cursor: pointer;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 2rem;
  text-transform: uppercase;
  color: white;
  mix-blend-mode: difference;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const CursorLi = styled(motion.li)`
  position: absolute;
  z-index: 0;
  height: 1.75rem;
  border-radius: 9999px;
  background-color: black;

  @media (min-width: 768px) {
    height: 3rem;
  }
`;
