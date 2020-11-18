import styled from 'styled-components';
import theme from '../../utils/theme';

interface ContainerProps {
  light: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-family: ${theme.fonts.fontDisplay};
  font-weight: 400;
  color: ${props => props.light ? theme.colors.greyLight1 : theme.colors.greyDark1};

  h1 {
    font-size: 4.5rem;
    color: ${theme.colors.greyLight1};
    line-height: 1;
  }

  h2 {
    font-size: 4rem;
    font-style: italic;
    line-height: 1;
  }

  h3 {
    font-size: 1.6rem;
    color: ${theme.colors.primary};
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.9rem;
  }
`;
