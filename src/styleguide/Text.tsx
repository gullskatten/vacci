import { IColors, ISpacing } from "./../../styled.d";
import styled, { css } from "styled-components";
import React from "react";

interface Props {
  color?: keyof IColors;
  variant?: "title" | "subtitle" | "body";
  element?: "span" | "p" | "h1" | "h2" | "h3";
  gutterLeft?: keyof ISpacing;
  gutterRight?: keyof ISpacing;
  gutterTop?: keyof ISpacing;
  gutterBottom?: keyof ISpacing;
  gutterBase?: keyof ISpacing;
}

const TextStyles = styled.div<Props>`
  color: ${(props) => props.theme.colors[props.color || "onPrimary"]};
  margin: 0;

  ${(props) =>
    props.variant == "title" &&
    css`
      font-family: ${props.theme.fonts.title};
      font-size: 2rem;
      font-weight: bold;
    `};
  ${(props) =>
    props.variant == "subtitle" &&
    css`
      font-family: ${props.theme.fonts.title};
      font-size: 1.5rem;
      font-weight: bold;
    `};
  ${(props) =>
    props.variant == "body" &&
    css`
      font-family: ${props.theme.fonts.title};
      font-size: 1.2rem;
      font-weight: normal;
    `};

  ${(props) =>
    props.gutterBottom &&
    css`
      margin-bottom: ${props.theme.spacing[props.gutterBottom]};
    `};

  ${(props) =>
    props.gutterTop &&
    css`
      margin-top: ${props.theme.spacing[props.gutterTop]};
    `};

  ${(props) =>
    props.gutterLeft &&
    css`
      margin-left: ${props.theme.spacing[props.gutterLeft]};
    `};

  ${(props) =>
    props.gutterRight &&
    css`
      margin-right: ${props.theme.spacing[props.gutterRight]};
    `};
`;

const Text: React.FC<Props> = ({
  children,
  element = "span",
  variant = "body",
  ...props
}) => {
  return (
    <TextStyles as={element} variant={variant} {...props}>
      {children}
    </TextStyles>
  );
};

export default Text;
