import { IColors } from "./../../styled.d";
import styled, { css } from "styled-components";
import React from "react";

interface Props {
  color?: keyof IColors;
  variant: "title" | "subtitle" | "body";
  element?: "span" | "p" | "h1" | "h2" | "h3";
}

const TextStyles = styled.div<Props>`
  color: ${props => props.theme.colors[props.color || "onPrimary"]};
  margin: 0;

  ${props =>
    props.variant == "title" &&
    css`
      font-family: ${props => props.theme.fonts.title};
      font-size: 2rem;
    `};
  ${props =>
    props.variant == "subtitle" &&
    css`
      font-family: ${props => props.theme.fonts.title};
      font-size: 1.5rem;
    `};
  ${props =>
    props.variant == "body" &&
    css`
      font-family: ${props => props.theme.fonts.title};
      font-size: 1.2rem;
    `};
`;

const Text: React.FC<Props> = ({ children, element, ...props }) => {
  return (
    <TextStyles as={element || "span"} {...props}>
      {children}
    </TextStyles>
  );
};

export default Text;
