import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.div`
  background-color: ${theme.colors.primary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;

  display: flex;
  justify-content: center;
  /* position: fixed;
  width: 8rem;
  height: 100vh; */

  @media only screen and (max-width: ${theme.breakpoints.bpLarge}) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Navbutton = styled.button`
  border: none;
  border-radius: 0;

  background-color: #fff;
  height: 2px;
  width: 4.5rem;
  margin-top: 4rem;

  &::before,
  &::after {
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    content: "";
    display: block;
  }

  &::before {
    transform: translateY(-1.5rem);
  }

  &::after {
    transform: translateY(1.3rem);
  }

  @media only screen and (max-width: ${theme.breakpoints.bpLarge}) {
    margin-top: 0;
    margin-right: 3rem;

    &::before {
      transform: translateY(-1.2rem);
    }

    &::after {
      transform: translateY(1rem);
    }
  }
`;