import styled, { css } from "styled-components";
import { ISpacing } from "../../styled";

interface GridProps {
  columnsLarge: string;
  columnsMedium: string;
  columnsSmall: string;
  gap?: keyof ISpacing;
  breakAt?: number;
  fullWidth?: boolean;
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

  ${(props) =>
    props.breakAt &&
    css`
      @media all and (max-width: ${props.breakAt}px) {
        display: block;
      }
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Grid;
