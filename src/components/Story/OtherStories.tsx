import React from "react";
import story from "../../assets/pt1_f3-4_attachment_to_cell.webp";
import story2 from "../../assets/pt2_f3-6_getting_the_jab.webp";
import story3 from "../../assets/images/6_vaccinated_holding_hands.png";
import story4 from "../../assets/images/1_sceptical_person.png";
import Flex from "../../styleguide/Flex";
import Padding from "../../styleguide/Padding";
import Margin from "../../styleguide/Margin";
import StoryCard from "./StoryCard";

const OtherStories: React.FC = () => {
  return (
    <Flex fullWidth breakAt={700} wrap="wrap">
      <Flex direction="column" flex={50}>
        <Margin all="s">
          <StoryCard
            title="Statistics"
            href="/statistics"
            src={story3}
            description="We look at some statics for the SARS-CoV-2 pandemic."
            withIcon={["far", "chart-bar"]}
          />
        </Margin>
      </Flex>
      <Flex direction="column" flex={50}>
        <Margin all="s">
          <StoryCard
            title="Vaccine concerns"
            href="/concerns"
            src={story4}
            description="We look at some concerns that people may have regarding the mRNA vaccines."
            withIcon={["far", "frown-open"]}
          />
        </Margin>
      </Flex>
    </Flex>
  );
};

export default OtherStories;
