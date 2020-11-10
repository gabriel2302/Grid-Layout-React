import React from 'react';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Realtors from '../../components/Realtors';
import Features from '../../components/Features';
import StoryPictures from '../../components/StoryPictures';
import StoryContent from '../../components/StoryContent';
import Homes from '../../components/Homes';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';


const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Header></Header>
      <Realtors></Realtors>
      <Features></Features>
      <StoryPictures></StoryPictures>
      <StoryContent></StoryContent>
      <Homes></Homes>
      <Gallery></Gallery>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
