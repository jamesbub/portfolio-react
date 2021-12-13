import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <a href="/" style={{ display: 'flex', alignItems: 'center', color: "white" }}>
        <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </a>
    </Div1>
    <Div2>
      <li>
        <a href="#projects">
          <NavLink>Projects</NavLink>
        </a>
      </li>
      <li>
        <a href="#tech">
          <NavLink>Technologies</NavLink>
        </a>
      </li>
      <li>
        <a href="#about">
          <NavLink>About</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://google.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
