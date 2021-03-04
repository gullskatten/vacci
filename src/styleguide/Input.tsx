import styled from "styled-components";
import { IColors } from "../../styled";

interface Props {
  borderColor?: keyof IColors;
}
const Input = styled.input<Props>`
  padding: 0.5rem 0.7rem;
  border: 0;
  outline: 0;
  border-bottom: 5px solid
    ${(props) => props.theme.colors[props.borderColor || "primary"]};
`;

export default Input;
