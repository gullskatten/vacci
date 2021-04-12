import React from "react";
import styled from "styled-components";

interface ImageProps {
  height?: string;
  width?: string;
  src: any;
}

const StyledImage = styled.img<ImageProps>`
  height: ${(props) => (props.height ? `${props.height}` : "200px")};
  width: ${(props) => (props.width ? props.width : "auto")};
  object-fit: contain;
`;

export default StyledImage;
