import React from 'react';

import { Container } from './styles';

interface HeadingProps {
  light?: boolean;
}

const Heading: React.FC<HeadingProps> = ({children, light=false, ...rest}) => {
  return (
    <Container light={light} {...rest} >
      {children}
    </Container>
  );
};

export default Heading;
