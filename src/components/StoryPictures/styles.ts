import styled from 'styled-components';
import theme from '../../utils/theme';

import background from '../../assets/img/back.jpg';

export const Container = styled.div`
  background-color: ${theme.colors.primary};
  grid-column: full-start / col-end 4;
  background-image: linear-gradient(to left, rgba(198, 153, 99, .5), rgba(198, 153, 99, .5)) ,url(${background});
  background-size: cover;

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  align-items: center;

  @media only screen and (max-width: ${theme.breakpoints.bpMedium}) {
    grid-column: 1 / -1;
    padding: 6rem;
  }


  img {
    width: 100%;
  }

  img:nth-child(1) {
    grid-row: 2 / 6;
    grid-column: 2 / 6;
    box-shadow: 0 2rem 5rem rgba(#000, .1);

    @media only screen and (max-width: ${theme.breakpoints.bpMedium}) {
      grid-column: 1 / 5;
      grid-row: 1 / -1;

    }

  }

  img:nth-child(2) {
    width: 115%;
    grid-row: 4 / 6;
    grid-column: 4 / 7;
    z-index: 20;
    box-shadow: 0 2rem 5rem rgba(#000, .1);

    @media only screen and (max-width: ${theme.breakpoints.bpMedium}) {
      grid-row: 1 / -1;
      width: 100%;
    }
  }
`;
