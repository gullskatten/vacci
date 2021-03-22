import { IColors } from "./../../styled.d";
import styled, { css } from "styled-components";

interface Props {
  background?: keyof IColors;
  fullWidth?: boolean;
  withShadow?: boolean;
}

const Background = styled.div<Props>`
  background-color: ${(props) =>
    props.theme.colors[props.background || "primary"]};

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

export const BackdropBackground = styled(Background)`
  margin-bottom: -40px;
  height: 80px;

  @media all and (max-width: 800px) {
    height: 80px;
    margin-bottom: -60px;
  }
`;

export default Background;
