import styled from "styled-components";
import CustomBackground from "./CustomBackground";

interface Props {
  src: string;
  height?: string;
}

const BackgroundImage = styled.div<Props>`
  background: url("${(props) => props.src}") no-repeat;
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height || "400px"};
  width: ${(props) => props.height || "100%"};
`;

const BackgroundImageContainer = styled.div`
  margin: auto auto;
  width: 60%;
`;

export { BackgroundImage, BackgroundImageContainer };
