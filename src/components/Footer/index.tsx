import React from 'react';

import { Container, Nav, Copyright } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Nav>
        <li><a href="#id">Find your dream home</a></li>
        <li><a href="#id">Request proposal</a></li>
        <li><a href="#id">Download home planner</a></li>
        <li><a href="#id">Contact us</a></li>
        <li><a href="#id">Submit your property</a></li>
        <li><a href="#id">Come work with us!</a></li>
      </Nav>
      <Copyright>
        &copy; Copyright 2017 by Jonas Schemedtmann. Fell free to use this project
        for your own purposes. This does NOT apply if you plan to produce your own
        course or tutorials based on this project.
      </Copyright>
    </Container>
  );
};

export default Footer;
