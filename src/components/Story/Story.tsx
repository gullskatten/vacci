import React from "react";
import styled from "styled-components";
import Text from "../../styleguide/Text";
import story from "../../assets/virus.gif";
import story2 from "../../assets/vaccine.gif";
import Flex from "../../styleguide/Flex";
import Margin from "../../styleguide/Margin";
import StyledLink from "../../styleguide/StyledLink";
import Padding from "../../styleguide/Padding";

interface Props {
  src: any;
}

const StoryWireframe = styled.div<Props>`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border: 5px solid #efefef;
  background-image: url(${(props) => props.src});
  background-size: 100% 100%;
  position: relative;
  cursor: pointer;
`;

const Story: React.FC = () => {
  return (
    <Padding right="m" fullWidth>
      <Flex gap={10} fullWidth breakAt={500}>
        <Flex direction="column" flex={1}>
          <StoryWireframe src={story}></StoryWireframe>
          <Margin top="m">
            <Text variant="subtitle" element="h3">
              <Text
                variant="subtitle"
                element="span"
                color="onBackgroundContrast"
                gutterRight="m"
              >
                Part 1:
              </Text>
              <StyledLink href="/" color="onBackground">
                Corona Virus
              </StyledLink>
            </Text>
          </Margin>
          <Text gutterTop="s" gutterBottom="m" color="onBackground">
            We look into the details of the corona virus and how it works.
          </Text>
        </Flex>
        <Flex direction="column" flex={1}>
          <StoryWireframe src={story2}></StoryWireframe>
          <Margin top="m">
            <Text variant="subtitle" element="h3">
              <Text
                variant="subtitle"
                element="span"
                color="onBackgroundContrast"
                gutterRight="m"
              >
                Part 2:
              </Text>
              <StyledLink href="/" color="onBackground">
                Corona Vaccine
              </StyledLink>
            </Text>
          </Margin>
          <Text gutterTop="s" gutterBottom="m" color="onBackground">
            We explain the mRNA vaccine and its effect on the human body.
          </Text>
        </Flex>
      </Flex>
    </Padding>
  );
};

export default Story;
