import styled, { css } from "styled-components";

interface Props {
  align?: "center" | "flex-start" | "flex-end";
  justify?: "space-between" | "space-around" | "normal";
  direction?: "column" | "row";
  fullWidth?: boolean;
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
`;

export default Flex;
