import { IColors } from "./../../styled.d";
import styled, { css } from "styled-components";

interface Props {
  background?: keyof IColors;
  fullWidth?: boolean;
}

const Background = styled.div<Props>`
  background-color: ${(props) =>
    props.theme.colors[props.background || "primary"]};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Background;
