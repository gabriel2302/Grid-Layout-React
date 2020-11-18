import styled from 'styled-components';
import theme from '../../utils/theme';
import background from '../../assets/img/hero.jpeg';

export const Container = styled.header`
  background-color: ${theme.colors.greyDark1};
  grid-column: full-start / col-end 6;
  background-image: linear-gradient(rgba(16, 29, 44, .93),rgba(16, 29, 44, .93)),
  url(${background});
  background-size: cover;
  background-position: center;
  padding: 8rem;
  padding-top: 4rem;

  display: grid;
  grid-template-rows: 1fr min-content 6rem 1fr;
  grid-template-columns: max-content;
  grid-row-gap: 1.5rem;
  justify-content: center;

  img {
    height: 3rem;
    justify-self: center;
  }

  button {
    align-self: start;
    justify-self: start;
  }
`;

export const SeenonText = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-column-gap: 1.5rem;
  align-items: center;

  font-size: 1.6rem;
  color: ${theme.colors.greyLight2};

  &::after,
  &::before {
    content: "";
    height: 1px;
    display: block;
    background-color: currentColor;
  }
`;

export const SeenonLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3rem;
  justify-items: center;

  img {
    height: 2.5rem;
    filter: brightness(70%);
  }
`;