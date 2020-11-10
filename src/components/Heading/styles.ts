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
    font-size: 1.9rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.9rem;
  }
`;
