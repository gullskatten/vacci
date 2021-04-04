import { Link } from "react-router-dom";
import styled from "styled-components";
import { IColors } from "../../styled";

interface Props {
  fontStyle?: "bold" | "normal" | "italic";
  textDecoration?: "underline" | "unset";
  color?: keyof IColors;
}

const StyledRouterLink = styled(({ ...props }) => <Link {...props} />)<Props>`
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "normal")};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "underline"};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : "inherit"};

  &:link {
    color: ${(props) =>
      props.color ? props.theme.colors[props.color] : "inherit"};
  }
`;

export default StyledRouterLink;
