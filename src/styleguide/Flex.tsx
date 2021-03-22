import styled, { css } from "styled-components";

interface Props {
  align?: "center" | "flex-start" | "flex-end";
  justify?: "space-between" | "space-around" | "normal" | "center";
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  gap?: number;
  flex?: number;
  basis?: number;
  fullWidth?: boolean;
  breakAt?: number;
  wrap?: "wrap" | "wrap-reverse";
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  justify-content: ${(props) => (props.justify ? props.justify : "unset")};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex}%;
    `}

    ${(props) =>
    props.basis &&
    css`
      flex-basis: ${props.basis}%;
    `}
    ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}
    ${(props) =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `}
    ${(props) =>
    props.breakAt &&
    css`
      @media all and (max-width: ${props.breakAt}px) {
        display: block;
      }
    `}
`;

export default Flex;
