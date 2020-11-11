import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;
`;

export const Homecard = styled.div`
  background-color: ${theme.colors.greyLight1};
  
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-row-gap: 3.5rem;


  img {
    width: 100%;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    z-index: 1;
  }

  svg {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    width: 2.5rem;
    height: 2.5rem;
    fill: ${theme.colors.primary};
    z-index: 2;
    justify-self: end;
    margin: 1rem;
  }

  h5 {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    justify-self: center;
    align-self: end;
    z-index: 3;

    width: 80%;
    font-family: ${theme.fonts.fontDisplay};
    font-size: 1.6rem;
    text-align: center;
    padding: 1.25rem;
    background-color: ${theme.colors.secondary};
    color: #fff;
    font-weight: 400;
    transform: translateY(50%);
  }

  button {
    grid-column: 1 / -1;
  }
`;

export const HomeInfo = styled.div`
  font-size: 1.5rem;
  margin-left: 2rem;

  display: flex;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${theme.colors.primary};
    margin-right: 1rem;
  }
`;
