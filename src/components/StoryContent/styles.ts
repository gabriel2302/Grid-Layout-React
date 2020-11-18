import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.div`
  background-color: ${theme.colors.greyLight1};
  grid-column: col-start 5 / full-end;

  padding: 6rem 8vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: ${theme.breakpoints.bpMedium}) {
    grid-column: 1 / -1;
    grid-row: 5 / 6;
  }


  /* display: grid;
  align-content: center;
  justify-items: start; */

  h2 {
    margin-bottom: 3rem;
  }

  h3 {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 4rem;

  }
`;
