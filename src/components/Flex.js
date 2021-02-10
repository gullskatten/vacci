import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: ${props => props.align || "center"};
  justify-content: ${props => props.justify || "flex-start"};

  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `};
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `};
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};

  ${props =>
    props.fullHeight &&
    css`
      height: 100%;
    `};

  ${props =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `};
  ${props =>
    props.centerContent &&
    css`
      align-items: center;
      justify-content: center;
    `};
`;

const FlexKid = styled.div`
  ${props =>
    props.displayFlex &&
    css`
      display: flex;
    `}
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `};
  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
    `};
  ${props =>
    props.flexBasis &&
    css`
      flex-basis: ${props.flexBasis};
    `};

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `};

  ${props =>
    props.hugRight &&
    css`
      margin-left: auto;
    `};
  ${props =>
    props.hugLeft &&
    css`
      margin-right: auto;
    `};
  ${props =>
    props.spaceLeft &&
    css`
      padding-left: ${props.theme.spacing.medium};
    `};

  ${props =>
    props.spaceRight &&
    css`
      padding-right: ${props.theme.spacing.medium};
    `};
  ${props =>
    props.centerContent &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};

  ${props =>
    props.alignSelf &&
    css`
      align-self: ${props.alignSelf};
    `};

  ${props =>
    props.gutterTop &&
    css`
      margin-top: ${props.theme.spacing.small};
    `};

  ${props =>
    props.gutterBottom &&
    css`
      margin-bottom: ${props.theme.spacing.small};
    `};
  ${props =>
    props.gutterLeft &&
    css`
      margin-left: ${props.theme.spacing.small};
    `};

  ${props =>
    props.gutterRight &&
    css`
      margin-right: ${props.theme.spacing.small};
    `};
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};

  ${props =>
    props.fullHeight &&
    css`
      height: 100%;
    `};
`;

export default Flex;
export { FlexKid };
