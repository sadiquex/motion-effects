import { useState } from "react";
import { motion } from "framer-motion";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";
import styled from "styled-components";
import { height } from "./animations";

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png",
  },
  {
    title: "Shop",
    href: "/shop",
    src: "shop.png",
  },
  {
    title: "About Us",
    href: "/about",
    src: "home.png",
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "lookbook.png",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
  },
];

export default function Navigation() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <Nav
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      // className={styles.nav}
    >
      <Wrapper>
        <Container>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </Container>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </Wrapper>
    </Nav>
  );
}

// styles
const Nav = styled(motion.div)`
  overflow: hidden;

  @media only screen and (min-width: 1000px) {
    margin-bottom: 0px;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 80px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
