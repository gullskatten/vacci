import React from "react";
import styled from "styled-components";

interface Props {
  fontStyle?: "bold" | "normal" | "italic";
  textDecoration?: "underline" | "unset";
}

const StyledLink = styled.a<Props>`
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "normal")};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "underline"};
  color: inherit;

  &:link {
    color: inherit;
  }
`;

export default StyledLink;
