import styled from "styled-components";
import { IColors } from "../../styled";

interface Props {
  color?: keyof IColors;
  fullWidth?: boolean;
  lineWidth?: number;
}

const Divider = styled.div<Props>`
  margin-bottom: 10px;
  padding-top: 10px;
  width: ${(props) => (props.fullWidth ? "100%" : "250px")};
  border-bottom: ${(props) => (props.lineWidth ? props.lineWidth : 5)}px solid
    ${(props) => props.theme.colors[props.color || "primary"]};
`;

export default Divider;
