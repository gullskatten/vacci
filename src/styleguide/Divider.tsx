import styled from "styled-components";
import { IColors } from "../../styled";

interface Props {
  color?: keyof IColors;
}

const Divider = styled.div<Props>`
  margin-bottom: 10px;
  padding-top: 10px;
  width: 200px;
  border-bottom: 5px solid
    ${(props) => props.theme.colors[props.color || "primary"]};
`;

export default Divider;
