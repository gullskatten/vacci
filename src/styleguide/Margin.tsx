import styled, { css } from "styled-components";
import { ISpacing } from "../../styled";

interface Props {
  left?: keyof ISpacing;
  right?: keyof ISpacing;
  top?: keyof ISpacing;
  bottom?: keyof ISpacing;
  all?: keyof ISpacing;
  fullWidth?: boolean;
}

// <---(content)---> "skyver ting vekk" (avstand til andre komponenter)

const Margin = styled.div<Props>`
  /* all margin */
  margin: ${(props) => props.theme.spacing[props.all || "none"]};

  ${(props) =>
    props.bottom &&
    css`
      margin-bottom: ${props.theme.spacing[props.bottom]};
    `};

  ${(props) =>
    props.top &&
    css`
      margin-top: ${props.theme.spacing[props.top]};
    `};

  ${(props) =>
    props.left &&
    css`
      margin-left: ${props.theme.spacing[props.left]};
    `};

  ${(props) =>
    props.right &&
    css`
      margin-right: ${props.theme.spacing[props.right]};
    `};
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Margin;
