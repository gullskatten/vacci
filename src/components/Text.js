import * as React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
/**
 * For sizes use:
 * biggest,
  bigger,
  smaller,
  smallest,
 */
const LinkText = styled(({ ...props }) => <Link {...props} />)`
  margin: 0;
  font-weight: 400;
  transition: color .15s linear;
  text-decoration: none;
  cursor: pointer;
  
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `} 
  ${props =>
    props.fonttype &&
    css`
      font-family: ${props.theme.fonts[props.fonttype]};
    `} 
  ${props =>
    props.textcolor &&
    css`
      color: ${props.theme.colors.text[props.textcolor]};
    `}   
 
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  ${props =>
    props.underlined &&
    css`
      text-decoration: underline;
    `}
  ${props =>
    props.italic &&
    css`
      font-style: italic;
    `}
  ${props =>
    props.withiconright &&
    css`
      svg {
        margin-left: ${props.theme.spacing.tiny};
      }
    `}
  ${props =>
    props.withiconleft &&
    css`
      svg {
        margin-right: ${props.theme.spacing.tiny};
      }
    `}        
  ${props =>
    props.block &&
    css`
      display: block;
    `}
  ${props =>
    props.withshadow &&
    css`
      text-shadow: 1px 0px 5px #3838386e;
    `}  
  ${props =>
    props.withdropshadow &&
    css`
     filter: drop-shadow(0 0 3px #ffffff);
    `}   
`;

const Text = ({
  title,
  element = "p",
  variant = "body",
  fontType = "primary",
  size = "normal",
  textColor,
  color,
  gutterBottom,
  gutterTop,
  gutterRight,
  block,
  bold,
  italic,
  underlined,
  withIconLeft,
  withIconRight,
  children,
  className,
  href,
  target,
  style,
  withShadow,
  withDropShadow,
  asLink,
  to,
  htmlFor
}) => {
  if (asLink) {
    return (
      <LinkText
        to={to}
        title={title}
        style={style}
        block={block}
        variant={variant}
        textcolor={textColor}
        color={color}
        bold={bold}
        underlined={underlined}
        italic={italic}
        withiconleft={withIconLeft}
        withiconright={withIconRight}
        withshadow={withShadow}
        withdropshadow={withDropShadow}
        fonttype={fontType}
        target={target}
      >
        {children}
      </LinkText>
    );
  }

  return (
    <StyledText
      title={title}
      size={size}
      style={style}
      className={className}
      block={block}
      gutterBottom={gutterBottom}
      gutterTop={gutterTop}
      gutterRight={gutterRight}
      fontType={fontType}
      variant={variant}
      textColor={textColor}
      color={color}
      bold={bold}
      underlined={underlined}
      italic={italic}
      withIconLeft={withIconLeft}
      withIconRight={withIconRight}
      href={href}
      target={target}
      withShadow={withShadow}
      withDropShadow={withDropShadow}
      as={element}
      htmlFor={htmlFor}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p`
  margin: 0;
  font-weight: 400;
  transition: color .15s linear;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `} 
  ${props =>
    props.fontType &&
    css`
      font-family: ${props.theme.fonts[props.fontType]};
    `} 
  ${props =>
    props.textColor &&
    css`
      color: ${props.theme.colors.text[props.textColor]};
    `}   
  ${props =>
    props.gutterBottom &&
    css`
      margin-bottom: ${props.theme.spacing.small};
    `}
  ${props =>
    props.gutterTop &&
    css`
      margin-top: ${props.theme.spacing.small};
    `}
    ${props =>
      props.gutterRight &&
      css`
        margin-right: ${props.theme.spacing.small};
      `}  
  ${props =>
    props.variant === "title" &&
    css`
      font-weight: 500;
      font-size: 2rem;
      ${props.size === "bigger" &&
        css`
          font-size: ${props.theme.fontSizes.large};
          @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
            font-size: ${props.theme.fontSizes.largex};
          }
        `}
      ${props.size === "biggest" &&
        css`
          font-size: ${props.theme.fontSizes.largex};
          @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
            font-size: ${props.theme.fontSizes.huge};
          }
        `}
      ${props.size === "huge" &&
        css`
          font-size: ${props.theme.fontSizes.huge};
          @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
            font-size: ${props.theme.fontSizes.hugex};
          }
        `}
    `}
  ${props =>
    props.variant === "subtitle" &&
    css`
      font-weight: 400;
      font-size: 1.5rem;

      ${props.size === "bigger" &&
        css`
          font-size: ${props.theme.fontSizes.mediumx};
          @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
            font-size: ${props.theme.fontSizes.large};
          }
        `}
      ${props.size === "biggest" &&
        css`
          font-size: ${props.theme.fontSizes.large};
          @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
            font-size: ${props.theme.fontSizes.largex};
          }
        `}
    `}
    ${props =>
      props.variant === "body" &&
      css`
        ${props.size === "bigger" &&
          css`
            font-size: ${props.theme.fontSizes.smallx};
            @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
              font-size: ${props.theme.fontSizes.medium};
            }
          `}
        ${props.size === "biggest" &&
          css`
            font-size: ${props.theme.fontSizes.medium};
            @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
              font-size: ${props.theme.fontSizes.mediumx};
            }
          `}
        ${props.size === "smaller" &&
          css`
            font-size: ${props.theme.fontSizes.tinyx};
            @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
              font-size: ${props.theme.fontSizes.small};
            }
          `}
      ${props.size === "smallest" &&
        css`
          font-size: ${props.theme.fontSizes.tiny};
          @media screen and (min-width: ${props.theme.screenSizes.smallx}) {
            font-size: ${props.theme.fontSizes.tinyx};
          }
        `}
      `}  

  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  ${props =>
    props.underlined &&
    css`
      text-decoration: underline;
    `}
  ${props =>
    props.italic &&
    css`
      font-style: italic;
    `}
  ${props =>
    props.withIconRight &&
    css`
      svg {
        margin-left: ${props.theme.spacing.tiny};
      }
    `}
  ${props =>
    props.withIconLeft &&
    css`
      svg {
        margin-right: ${props.theme.spacing.tiny};
      }
    `}        
  ${props =>
    props.block &&
    css`
      display: block;
    `}
  ${props =>
    props.withShadow &&
    css`
      text-shadow: 1px 0px 5px #3838386e;
    `}  
    ${props =>
      props.withDropShadow &&
      css`
       filter: drop-shadow(0 0 3px #ffffff);
      `}    
`;

export default Text;
