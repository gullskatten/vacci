import styled, { css } from "styled-components";

interface HideIfProps {
  screenSize: "s" | "m" | "l";
}

const HideIf = styled.div<HideIfProps>`
  ${(props) =>
    props.screenSize === "s" &&
    css`
      @media all and (max-width: 500px) {
        display: none;
      }
    `}
  ${(props) =>
    props.screenSize === "m" &&
    css`
      @media all and (min-width: 500px) {
        display: none;
      }
    `}
    ${(props) =>
    props.screenSize === "l" &&
    css`
      @media all and (min-width: 1400px) {
        display: none;
      }
    `}
`;

export default HideIf;
