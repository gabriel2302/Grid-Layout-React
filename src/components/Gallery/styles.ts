import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.section`
  background-color: ${theme.colors.greyLight1};
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;

  .img-1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
  }

  .img-2 {
    grid-row: 1 / span 3;
    grid-column: 3 / span 3;
  }

  .img-3 {
    grid-row: 1 / span 2;
    grid-column: 6 / 7;
  }

  .img-4 {
    grid-row: 1 / 3;
    grid-column: 7 / -1;
  }
  
  .img-5 {
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
  }

  .img-6 {
    grid-row: 4 / 6;
    grid-column: 3 / 5;
  }

  .img-7 {
    grid-row: 4 / 5;
    grid-column: 5 / 6;
  }

  .img-8 {
    grid-row: 3 / 5;
    grid-column: 6 / 8;
  }

  .img-9 {
    grid-row: 3 / 6;
    grid-column: 8 / -1;
  }

  .img-10 {
    grid-row: 6 / -1;
  }

  .img-11 {
    grid-row: 6 / -1;
    grid-column: 2 / 4;
  }

  .img-12 {
    grid-row: 6 / -1;
  }

  .img-13 {
    grid-row: 5 / -1;
    grid-column: 5 / 8;
  }

  .img-14 {
    grid-row: 6 / -1;
  }

`;

export const GalleryItem = styled.figure`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

`;
