import styled, { css } from "styled-components";
import { ISpacing } from "../../styled";

interface Props {
  left?: keyof ISpacing;
  right?: keyof ISpacing;
  top?: keyof ISpacing;
  bottom?: keyof ISpacing;
  all?: keyof ISpacing;
}

const Padding = styled.div<Props>`
  /* Base padding */
  padding: ${(props) => props.theme.spacing[props.all || "none"]};

  ${(props) =>
    props.bottom &&
    css`
      padding-bottom: ${props.theme.spacing[props.bottom]};
    `};

  ${(props) =>
    props.top &&
    css`
      padding-top: ${props.theme.spacing[props.top]};
    `};

  ${(props) =>
    props.left &&
    css`
      padding-left: ${props.theme.spacing[props.left]};
    `};

  ${(props) =>
    props.right &&
    css`
      padding-right: ${props.theme.spacing[props.right]};
    `};
`;

export default Padding;
