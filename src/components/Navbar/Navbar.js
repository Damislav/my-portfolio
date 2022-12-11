import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavWrapper,
  SocialIcons,
} from "./NavbarStyles";

const Navbar = () => (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects" passHref legacyBehavior>
        <NavWrapper>Projects</NavWrapper>
      </Link>
      <Link href="#tech" passHref legacyBehavior>
        <NavWrapper>Technologies</NavWrapper>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Damislav">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Navbar;
