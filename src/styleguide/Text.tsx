import { IColors, ISpacing } from "./../../styled.d";
import styled, { css } from "styled-components";
import React from "react";

interface Props {
  color?: keyof IColors;
  variant?: "title" | "subtitle" | "body" | "pico";
  element?: "span" | "p" | "h1" | "h2" | "h3" | "label";
  textAlign?: "center" | "left" | "right";
  gutterLeft?: keyof ISpacing;
  gutterRight?: keyof ISpacing;
  gutterTop?: keyof ISpacing;
  gutterBottom?: keyof ISpacing;
  gutterBase?: keyof ISpacing;
  italic?: boolean;
  bold?: boolean;
  htmlFor?: string;
}

const TextStyles = styled.div<Props>`
  color: ${(props) => props.theme.colors[props.color || "onPrimary"]};
  margin: 0;

  ${(props) =>
    props.variant == "title" &&
    css`
      line-height: 2;
      font-family: ${props.theme.fonts.title};
      font-size: 2rem;
      font-weight: bold;

      @media all and (max-width: 900px) {
        font-size: 1.7rem;
      }
    `};
  ${(props) =>
    props.variant == "subtitle" &&
    css`
      line-height: 1.7;
      font-family: ${props.theme.fonts.title};
      font-size: 1.5rem;
      font-weight: bold;

      @media all and (max-width: 900px) {
        font-size: 1.3rem;
      }
    `};
  ${(props) =>
    props.variant == "body" &&
    css`
      line-height: 1.5;
      font-family: ${props.theme.fonts.body};
      font-size: 1rem;
      font-weight: normal;

      @media all and (max-width: 900px) {
        font-size: 0.9rem;
      }
    `};

  ${(props) =>
    props.variant == "pico" &&
    css`
      line-height: 1.5;
      font-family: ${props.theme.fonts.body};
      font-size: 0.8rem;
      font-weight: normal;

      @media all and (max-width: 900px) {
        font-size: 0.7rem;
      }
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

  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `};

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `};
`;

const Text: React.FC<Props> = ({
  children,
  element = "p",
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
