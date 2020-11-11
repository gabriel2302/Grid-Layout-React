import React from 'react';

import { Container } from './styles';
import Heading from '../Heading';
import Button from '../Button';

const StoryContent: React.FC = () => {
  return (
    <Container>
      <Heading>
        <h3>Happy Customers</h3>
      </Heading>
      <Heading>
        <h2>&ldquo;The best decision of our lives &rdquo;</h2>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis, laborum exercitationem nulla voluptatum</p>
      <Button>Find your own home</Button>
    </Container>
  );
};

export default StoryContent;
