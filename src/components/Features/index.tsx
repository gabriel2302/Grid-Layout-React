import React from 'react';
import { BiTrophy, BiGlobe, BiMap, BiLineChart, BiLockOpen } from 'react-icons/bi';
import { FiKey } from 'react-icons/fi';
import { Container, Feature } from './styles';

import Heading from '../Heading';

const Features: React.FC = () => {

  return (
    <Container>
      <Feature>
        <BiGlobe />
        <Heading>
        <h4>World's best luxury homes</h4> 
        </Heading>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni 
          perspiciatis cumque illo. Eos necessitatibus repudiandae voluptates. 
        </p>
      </Feature>
      <Feature>
        <BiTrophy />
        <Heading>
          <h4>Only the best properties</h4>
        </Heading>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni 
          perspiciatis cumque illo. Eos necessitatibus repudiandae voluptates. 
        </p>
      </Feature>
      <Feature>
        <BiMap />
        <Heading>
          <h4>All home in the top locations</h4>
        </Heading>
        <p>There are many variations of passages of Lorem Ipsum available, but 
          the majority have suffered alteration in some form.
        </p>
      </Feature>
      <Feature>
        <FiKey />
        <Heading>
          <h4>New home in one week</h4>
        </Heading>
        <p>All the Lorem Ipsum generators on the Internet tend to repeat 
          predefined chunks as necessary. 
        </p>
      </Feature>
      <Feature>
        <BiLineChart />
        <Heading>
          <h4>Top 1% realtors</h4>
        </Heading>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni 
          perspiciatis cumque illo. Eos necessitatibus repudiandae voluptates. 
        </p>
      </Feature>
      <Feature>
        <BiLockOpen />
        <Heading>
          <h4>Secure payments on nexter</h4>
        </Heading>
        <p>making this the first true generator on the Internet. It uses a 
          dictionary of over 200 Latin words. 
        </p>
      </Feature>
    </Container>
  );
};

export default Features;
