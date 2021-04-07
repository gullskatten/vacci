import React from "react";
import Background, { BackdropBackground } from "../../styleguide/Background";
import Flex from "../../styleguide/Flex";
import Padding from "../../styleguide/Padding";
import StyledImage from "../../styleguide/StyledImage";
import Text from "../../styleguide/Text";
import MainMatter from "../Content/MainMatter";
import Margin from "../../styleguide/Margin";
import StyledLink from "../../styleguide/StyledLink"


const Stats: React.FC = () => {
  return (
    <MainMatter>
      <Background background="surface" fullWidth>
        <Padding all="l">
          <Text variant="title" element = "h1" color = "onSurface">
            Statistics
          </Text>

          <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            concering the COVID-19 pandemic and the mRNA vaccines
          </Text>

          <Flex direction = "column">
            <Text color = "onSurface" gutterTop = "m">
              A lot of statistics has been presented since the start of the COVID-19 pandemic. 
              On this page we have gathered some of the most relevant statistics concerning the 
              pandemic in Norway and the mRNA vaccines. This includes number of confirmed cases 
              of COVID-19 and number of deaths related to COVID-19, as well as number of tests taken 
              and number of COVID-19 patients in the hospital. For the vaccines, 
              statistics about the vaccination, side effects and vaccine efficacy is presented. 
            </Text>
          </Flex>
        </Padding>
        <Padding all = "l">
          <Text variant = "subtitle" element = "h1" color = "onSurface">
            About the pandemic
          </Text>
          <Flex direction = "column">
            <Text variant = "body" element ="h3" color ="onSurface">
              Here are some statics about the pandemic in Norway... Embed embed embed  
            </Text>
          </Flex>
        </Padding>
      </Background>
    </MainMatter> 
  );
};

export default Stats; 