import React from 'react';

import { Container, SeenonText, SeenonLogos } from './styles';
import logo from '../../assets/img/logo.png';
import logobbc from '../../assets/img/logo-bbc.png';
import logoforbes from '../../assets/img/logo-forbes.png';
import logotechcrunch from '../../assets/img/logo-techcrunch.png';
import logobi from '../../assets/img/logo-bi.png';
import Heading from '../Heading';
import Button from '../Button';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Nexter Logo"/>
      <Heading>
        <h3>Your own home:</h3>
      </Heading>
      <Heading>
        <h1>The ultimate personal freedom</h1>
      </Heading>
      <Button>View our properties</Button>
      <SeenonText>Seen on</SeenonText>
      <SeenonLogos>
        <img src={logobbc} alt="BBC Logo"/>
        <img src={logoforbes} alt="Forbes Logo"/>
        <img src={logotechcrunch} alt="TechCrunch Logo"/>
        <img src={logobi} alt="BI Logo"/>
      </SeenonLogos>
    </Container>
  );
};

export default Header;
