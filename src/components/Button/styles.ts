import styled from 'styled-components';

import theme from '../../utils/theme';

const { colors, fonts } = theme;

export const Container = styled.button`
  background-color: ${colors.primary};
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: ${fonts.fontDisplay};
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all .2s;

  :hover {
    background-color: ${colors.primaryDark};
  }
`;
