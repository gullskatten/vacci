import React from "react";
import styled, { css } from "styled-components";
import { IColors } from "../../styled";

interface Props {
  background?: keyof IColors;
  fullWidth?: boolean;
}

const Card = styled.div<Props>`
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) =>
    props.theme.colors[props.background || "primary"]};
  position: relative;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Card;
