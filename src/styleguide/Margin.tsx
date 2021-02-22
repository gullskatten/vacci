import styled, { css } from "styled-components";
import { ISpacing } from "../../styled";

interface Props {
  gutterLeft?: keyof ISpacing;
  gutterRight?: keyof ISpacing;
  gutterTop?: keyof ISpacing;
  gutterBottom?: keyof ISpacing;
  gutterBase?: keyof ISpacing;
}

const Margin = styled.div<Props>`
  /* Base margin */
  margin: ${(props) => props.theme.spacing[props.gutterBase || "none"]};

  ${(props) =>
    props.gutterBottom &&
    css`
      margin-bottom: ${props.theme.spacing[props.gutterBottom]};
    `};

  ${(props) =>
    props.gutterTop &&
    css`
      margin-top: ${props.theme.spacing[props.gutterTop]};
    `};

  ${(props) =>
    props.gutterLeft &&
    css`
      margin-left: ${props.theme.spacing[props.gutterLeft]};
    `};

  ${(props) =>
    props.gutterRight &&
    css`
      margin-right: ${props.theme.spacing[props.gutterRight]};
    `};
`;

export default Margin;
