import React from 'react';
import { BiHeart, BiMap, BiUser, BiArea, BiKey } from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa';

import { Container, Homecard, HomeInfo } from './styles';

import Button from '../Button';

import img1 from '../../assets/img/house-1.jpeg';
import img2 from '../../assets/img/house-2.jpeg';
import img3 from '../../assets/img/house-3.jpeg';
import img4 from '../../assets/img/house-4.jpeg';
import img5 from '../../assets/img/house-5.jpeg';
import img6 from '../../assets/img/house-6.jpeg';

const Homes: React.FC = () => {
  return (
    <Container>
      <Homecard>
        <img src={img1} alt="Casa 1"/>
        <FaHeart />
        <h5>Beautiful Family House</h5> 
               
        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiMap />
          <p>USA</p>
        </HomeInfo>

        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiUser />
          <p>5 rooms</p>
        </HomeInfo>

        <HomeInfo>
          <BiArea />
          <p>325 m<sup>2</sup></p>
        </HomeInfo>

        <HomeInfo>
          <BiKey />
          <p>$1,200,000</p>
        </HomeInfo>
        <Button>Contact realtor</Button>
      </Homecard>

      <Homecard>
        <img src={img2} alt="Casa 2"/>
        <FaHeart />
        <h5>Modern Glass Villa</h5>
        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiMap />
          <p>Canada</p>
        </HomeInfo>

        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiUser />
          <p>6 rooms</p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>450 m<sup>2</sup></p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>$2,750,000</p>
        </HomeInfo>
        <Button>Contact realtor</Button>
      </Homecard>

      <Homecard>
        <img src={img3} alt="Casa 3"/>
        <BiHeart />
        <h5>Cozy Country House</h5>
        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiMap />
          <p>UK</p>
        </HomeInfo>

        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiUser />
          <p>4 rooms</p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>250 m<sup>2</sup></p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>$850,000</p>
        </HomeInfo>
        <Button>Contact realtor</Button>
      </Homecard>

      <Homecard>
        <img src={img4} alt="Casa 4"/>
        <BiHeart />
        <h5>Beautiful Family House</h5>
        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiMap />
          <p>USA</p>
        </HomeInfo>

        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiUser />
          <p>5 rooms</p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>325 m<sup>2</sup></p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>$1,2000,000</p>
        </HomeInfo>
        <Button>Contact realtor</Button>
      </Homecard>

      <Homecard>
        <img src={img5} alt="Casa 5"/>
        <BiHeart />
        <h5>Beautiful Family House</h5>
        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiMap />
          <p>USA</p>
        </HomeInfo>

        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiUser />
          <p>5 rooms</p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>325 m<sup>2</sup></p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>$1,2000,000</p>
        </HomeInfo>
        <Button>Contact realtor</Button>
      </Homecard>

      <Homecard>
        <img src={img6} alt="Casa 6"/>
        <BiHeart />
        <h5>Beautiful Family House</h5>
        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiMap/>
          <p>USA</p>
        </HomeInfo>

        <HomeInfo style={{marginTop: '2.5rem'}}>
          <BiUser />
          <p>5 rooms</p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>325 m<sup>2</sup></p>
        </HomeInfo>

        <HomeInfo>
          <BiUser />
          <p>$1,2000,000</p>
        </HomeInfo>
        <Button>Contact realtor</Button>
      </Homecard>

    </Container>
  );
};

export default Homes;
