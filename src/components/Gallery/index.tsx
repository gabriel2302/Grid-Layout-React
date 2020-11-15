import React from 'react';

import { Container, GalleryItem } from './styles';

import gal1 from '../../assets/img/gal-1.jpeg';
import gal2 from '../../assets/img/gal-2.jpeg';
import gal3 from '../../assets/img/gal-3.jpeg';
import gal4 from '../../assets/img/gal-4.jpeg';
import gal5 from '../../assets/img/gal-5.jpeg';
import gal6 from '../../assets/img/gal-6.jpeg';
import gal7 from '../../assets/img/gal-7.jpeg';
import gal8 from '../../assets/img/gal-8.jpeg';
import gal9 from '../../assets/img/gal-9.jpeg';
import gal10 from '../../assets/img/gal-10.jpeg';
import gal11 from '../../assets/img/gal-11.jpeg';
import gal12 from '../../assets/img/gal-12.jpeg';
import gal13 from '../../assets/img/gal-13.jpeg';
import gal14 from '../../assets/img/gal-14.jpeg';

const Gallery: React.FC = () => {
  return (
    <Container>
      <GalleryItem className="img-1">
        <img src={gal1} alt="gal1"/>
      </GalleryItem>

      <GalleryItem className="img-2">
        <img src={gal2} alt="gal2"/>
      </GalleryItem>

      <GalleryItem className="img-3">
        <img src={gal3} alt="gal3"/>
      </GalleryItem>

      <GalleryItem className="img-4">
        <img src={gal4} alt="gal4"/>
      </GalleryItem>

      <GalleryItem className="img-5">
        <img src={gal5} alt="gal5"/>
      </GalleryItem>

      <GalleryItem className="img-6">
        <img src={gal6} alt="gal6"/>
      </GalleryItem>

      <GalleryItem className="img-7"> 
        <img src={gal7} alt="gal7"/>
      </GalleryItem>

      <GalleryItem className="img-8">
        <img src={gal8} alt="gal8"/>
      </GalleryItem>

      <GalleryItem className="img-9">
        <img src={gal9} alt="gal9"/>
      </GalleryItem>

      <GalleryItem className="img-10">
        <img src={gal10} alt="gal10"/>
      </GalleryItem>

      <GalleryItem className="img-11">
        <img src={gal11} alt="gal11"/>
      </GalleryItem>

      <GalleryItem className="img-12">
        <img src={gal12} alt="gal12"/>
      </GalleryItem>

      <GalleryItem className="img-13">
        <img src={gal13} alt="gal13"/>
      </GalleryItem>

      <GalleryItem className="img-14">
        <img src={gal14} alt="gal14"/>
      </GalleryItem>

    </Container>
  );
};

export default Gallery;
