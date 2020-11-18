import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.div`
  background-color: ${theme.colors.secondary};
  grid-column: col-start 7 / full-end;
  padding: 3rem;

  display: grid;
  grid-row-gap: 2rem;
  justify-content: center;
  justify-items: center;
  align-content: center;

  @media only screen and (max-width: ${theme.breakpoints.bpMedium}) {
    grid-column: 1 / -1;
  }

  img {
    width: 7rem;
    border-radius: 50%;
    display: block;
  }
`;

export const RealtorsList = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 2rem;
  grid-row-gap: 5vh;
  align-items: center;

  @media only screen and (max-width: ${theme.breakpoints.bpMedium}) {
    grid-template-columns: repeat(3, min-content max-content);
  }

  @media only screen and (max-width: ${theme.breakpoints.bpSmall}) {
    grid-template-columns: min-content max-content;
  }
`;

export const RealtorDetails = styled.div`
  p {
    text-transform: uppercase;
    color: ${theme.colors.greyLight2};
    margin-top: -3px;
  }
`;