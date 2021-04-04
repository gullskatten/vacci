import { IColors } from "./../../styled.d";
import styled, { css } from "styled-components";
import setAlphaColor from "../utils/setAlphaColor";

interface Props {
  background?: keyof IColors;
  alpha?: string;
  fullWidth?: boolean;
  withShadow?: boolean;
}

const CustomBackground = styled.div<Props>`
  background-color: ${(props) =>
    props.alpha
      ? setAlphaColor(
          props.theme.colors[props.background || "primary"],
          props.alpha
        )
      : props.theme.colors[props.background || "primary"]};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.withShadow &&
    css`
      box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);
    `}
`;

export default CustomBackground;
