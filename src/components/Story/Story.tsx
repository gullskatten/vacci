import React from "react";
import styled from "styled-components";
import Text from "../../styleguide/Text";
import story from "../../assets/story2.gif";
const StoryWireframe = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border: 2px solid #eeeeee;
  background-color: ${(props) => props.theme.colors.surface};
  background-image: url(${story});
  background-size: 100% 100%;
  position: relative;
`;

const StoryText = styled.div`
  position: absolute;
  bottom: 15px;
`;

const Story: React.FC = () => {
  return (
    <StoryWireframe>
      <StoryText>
        <Text variant="pico" color="onSurface">
          <Text element="span" bold variant="pico" color="onSurface">
            This is dog.{" "}
          </Text>{" "}
          He is searching for some stories to add here!
        </Text>
      </StoryText>
    </StoryWireframe>
  );
};

export default Story;
