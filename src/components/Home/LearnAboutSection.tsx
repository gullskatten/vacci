import React from "react";
import Background from "../../styleguide/Background";
import {
  BackgroundImage,
  BackgroundImageContainer,
} from "../../styleguide/BackgroundImage";
import CustomBackground from "../../styleguide/CustomBackground";
import Flex from "../../styleguide/Flex";
import Margin from "../../styleguide/Margin";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";
import AnimatedShortStories from "../Story/AnimatedShortStories";
import OtherStories from "../Story/OtherStories";
import unBanner from "../../assets/images/serj-transport.jpg";
const LearnAboutSection: React.FC = () => {
  return (
    <CustomBackground background="surface" alpha="0.6">
      <BackgroundImage src={unBanner} height="auto">
        <CustomBackground background="primary" alpha="0.5">
          <Padding all="m">
            <Text variant="title" element="h2" color="onPrimary">
              Learn about
            </Text>
            <Text variant="body" element="p" color="onPrimary" gutterTop="m">
              The complexities around SARS-CoV-2, the mRNA vaccine, important
              statistics and vaccine concerns, with our simple,
              easy-to-understand stories.
            </Text>
          </Padding>
        </CustomBackground>
      </BackgroundImage>
      <Padding all="l">
        <Flex direction="column" gap={10}>
          <Flex align="center" justify="center" fullWidth>
            <AnimatedShortStories />
          </Flex>

          <Margin top="m" bottom="m">
            <Text variant="title" element="h2" color="onBackgroundContrast">
              Read more
            </Text>
          </Margin>
          <Flex align="center" justify="center" fullWidth>
            <OtherStories />
          </Flex>
        </Flex>
      </Padding>
    </CustomBackground>
  );
};

export default LearnAboutSection;
