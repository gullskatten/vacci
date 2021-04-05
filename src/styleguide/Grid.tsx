import styled, { css } from "styled-components";
import { ISpacing } from "../../styled";

interface GridProps {
  columnsLarge: string;
  columnsMedium: string;
  columnsSmall: string;
  gap?: keyof ISpacing;
}

const Grid = styled.div<GridProps>`
  display: grid;

  @media all and (max-width: 500px) {
    grid-template-columns: ${(props) => props.columnsSmall};
  }

  @media all and (min-width: 500px) {
    grid-template-columns: ${(props) => props.columnsMedium};
  }

  @media all and (min-width: 1000px) {
    grid-template-columns: ${(props) => props.columnsLarge};
  }

  ${(props) =>
    props.gap &&
    css`
      grid-gap: ${props.theme.spacing[props.gap]};
    `};
`;

export default Grid;
