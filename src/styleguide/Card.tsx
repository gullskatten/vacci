import styled, { css } from "styled-components";
import { IColors } from "../../styled";

interface Props {
  background?: keyof IColors;
  fullWidth?: boolean;
  clickable?: boolean;
  height?: number;
  width?: number;
}

const Card = styled.div<Props>`
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) =>
    props.theme.colors[props.background || "surface"]};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
    ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
    `}
`;

export default Card;
