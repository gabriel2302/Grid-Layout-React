import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.section`
  grid-column: center-start / center-end;

  margin: 15rem 0;

  display: grid;
  //grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start;

  @media only screen and (max-width: ${theme.breakpoints.bpSmall}) {
    margin: 8rem 0;
  }
`;

export const Feature = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;

  svg {
    width: 4.5rem;
    height: 4.5rem;
    color: ${theme.colors.primary};
    grid-row: 1 / span 2; // -1 só funciona com grid explícito
    transform: translateY(-1rem);
  }

  p {
    font-size: 1.7rem;
  }
`;