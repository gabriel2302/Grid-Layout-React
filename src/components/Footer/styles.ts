import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.footer`
  background-color: ${theme.colors.secondary};
  grid-column: full-start / full-end;
  padding: 8rem;
`;

export const Nav = styled.ul`
    list-style: none;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center;

    a:link, a:visited {
      font-size: 1.4rem;
      color: #fff;
      font-family: ${theme.fonts.fontDisplay};
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      padding: 1.5rem;
      display: block;
      transition: all .2s;
    }

    a:hover, a:active {
      background-color: rgba(255, 255, 255, .05);
      transform: translateY(-3px);
    }

`;

export const Copyright = styled.p`
  font-size: 1.4rem;
  color: ${theme.colors.greyLight2};
  margin-top: 6rem;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
`;

