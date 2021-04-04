import React from "react";
import story from "../../assets/pt1_f3-4_attachment_to_cell.webp";
import story2 from "../../assets/pt2_f1_vaccines_blink.webp";
import Flex from "../../styleguide/Flex";
import Padding from "../../styleguide/Padding";
import StoryCard from "./StoryCard";

const AnimatedShortStories: React.FC = () => {
  return (
    <Flex fullWidth breakAt={700} wrap="wrap">
      <Flex direction="column" flex={50}>
        <Padding all="s" fullWidth>
          <StoryCard
            title="SARS-CoV-2"
            href="/home/stories/sars-cov-2"
            src={story}
            description="The SARS-CoV-2 virus in a nutshell."
            withIcon={"arrow-right"}
          />
        </Padding>
      </Flex>
      <Flex direction="column" flex={50}>
        <Padding all="s" fullWidth>
          <StoryCard
            title="mRNA Vaccine"
            href="/home/stories/mrna-vaccine"
            src={story2}
            description="The mRNA vaccine 101 and its effects on your body."
            withIcon={"arrow-right"}
          />
        </Padding>
      </Flex>
    </Flex>
  );
};

export default AnimatedShortStories;
