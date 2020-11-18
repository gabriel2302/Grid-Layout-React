import React from 'react';
import Heading from '../Heading';

import { Container, RealtorsList, RealtorDetails } from './styles';

import realtor1 from '../../assets/img/realtor-1.jpeg';
import realtor2 from '../../assets/img/realtor-2.jpeg';
import realtor3 from '../../assets/img/realtor-3.jpeg';

const Realtors: React.FC = () => {
  return (
    <Container>
      <Heading>
        <h3>Top 3 Realtors</h3>
      </Heading>
      <RealtorsList>
        <img src={realtor1} alt="Realtor 1"/>
        <RealtorDetails>
        <Heading light>
          <h4>Erik Feinman</h4>
        </Heading>
        <p>245 houses sold</p>
        </RealtorDetails>

        <img src={realtor2} alt="Realtor 2"/>
        <RealtorDetails>
        <Heading light>
          <h4>Kim Brown</h4>
        </Heading>
        <p>212 houses sold</p>
        </RealtorDetails>

        <img src={realtor3} alt="Realtor 3"/>
        <RealtorDetails>
        <Heading light>
          <h4>Toby Ramsey</h4>
        </Heading>
        <p>198 houses sold</p>
        </RealtorDetails>

      </RealtorsList>
    </Container>
  );
};

export default Realtors;
