import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.div`
  background-color: ${theme.colors.primary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;

  /* position: fixed;
  width: 8rem;
  height: 100vh; */

`;
