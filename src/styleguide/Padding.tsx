import styled, { css } from "styled-components";
import { ISpacing } from "../../styled";

interface Props {
  gutterLeft?: keyof ISpacing;
  gutterRight?: keyof ISpacing;
  gutterTop?: keyof ISpacing;
  gutterBottom?: keyof ISpacing;
  gutterBase?: keyof ISpacing;
}

const Padding = styled.div<Props>`
  /* Base padding */
  padding: ${(props) => props.theme.spacing[props.gutterBase || "none"]};

  ${(props) =>
    props.gutterBottom &&
    css`
      padding-bottom: ${props.theme.spacing[props.gutterBottom]};
    `};

  ${(props) =>
    props.gutterTop &&
    css`
      padding-top: ${props.theme.spacing[props.gutterTop]};
    `};

  ${(props) =>
    props.gutterLeft &&
    css`
      padding-left: ${props.theme.spacing[props.gutterLeft]};
    `};

  ${(props) =>
    props.gutterRight &&
    css`
      padding-right: ${props.theme.spacing[props.gutterRight]};
    `};
`;

export default Padding;
