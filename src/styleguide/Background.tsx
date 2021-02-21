import { IColors } from "./../../styled.d";
import styled, { css } from "styled-components";

interface Props {
  color?: keyof IColors;
  fullWidth?: boolean;
}

const Background = styled.div<Props>`
  color: ${props => props.theme.colors[props.color || "primary"]};

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Background;
