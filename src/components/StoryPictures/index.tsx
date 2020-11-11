import React from 'react';

import { Container } from './styles';
import img1 from '../../assets/img/story-1.jpeg';
import img2 from '../../assets/img/story-2.jpeg';

const StoryPictures: React.FC = () => {
  return (
    <Container>
      <img src={img1} alt="Couple with new house"/>
      <img src={img2} alt="New house"/>
    </Container>
  );
};

export default StoryPictures;
