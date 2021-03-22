import React from "react";
import story from "../../assets/pt1_f3-4_attachment_to_cell.webp";
import story2 from "../../assets/pt2_f3-6_getting_the_jab.webp";
import Flex from "../../styleguide/Flex";
import Margin from "../../styleguide/Margin";
import StoryCard from "./StoryCard";

const AnimatedShortStories: React.FC = () => {
  return (
    <Flex fullWidth breakAt={700} wrap="wrap">
      <Flex direction="column" flex={50}>
        <Margin all="s">
          <StoryCard
            title="SARS-CoV-2"
            href="/home/stories/sars-cov-2"
            src={story}
            description="We look into the details of the SARS-CoV-2 virus and how it
                  works."
            withIcon={"arrow-right"}
          />
        </Margin>
      </Flex>
      <Flex direction="column" flex={50}>
        <Margin all="s">
          <StoryCard
            title="mRNA Vaccine"
            href="/home/stories/mrna-vaccine"
            src={story2}
            description="We explain the mRNA vaccine and its effect on the human body."
            withIcon={"arrow-right"}
          />
        </Margin>
      </Flex>
    </Flex>
  );
};

export default AnimatedShortStories;
