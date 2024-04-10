import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import { FaXTwitter } from 'react-icons/fa6';

const Header = () => (
  <Container>
    <Div1>
      <a href="/" style={{ display: 'flex', alignItems: 'center', color: "white" }}>
        <DiCssdeck size="3rem" /> <span style={{fontSize:'20px'}}>Portfolio</span>
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
      <li>
        <a href="#certifications">
          <NavLink>Certifications</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/jamesbub" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/biswajeet-rout" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/iBiswajeet" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
