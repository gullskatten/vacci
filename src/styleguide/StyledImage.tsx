import React from "react";
import styled from "styled-components";

interface ImageProps {
  height?: number;
  src: any;
}

const StyledImage = styled.img<ImageProps>`
  height: ${(props) => (props.height ? `${props.height}px` : "200px")};
  object-fit: contain;
`;

export default StyledImage;
