import React from "react";
import story3 from "../../assets/images/6_vaccinated_holding_hands.png";
import story4 from "../../assets/images/1_sceptical_person.png";
import Flex from "../../styleguide/Flex";
import Padding from "../../styleguide/Padding";
import StoryCard from "./StoryCard";

const OtherStories: React.FC = () => {
  return (
    <Flex fullWidth breakAt={700} wrap="wrap">
      <Flex direction="column" flex={50}>
        <Padding all="s" fullWidth>
          <StoryCard
            title="Statistics"
            href="/statistics"
            src={story3}
            description="Numbers don’t lie; let’s look at the stats!"
            withIcon={["far", "chart-bar"]}
          />
        </Padding>
      </Flex>
      <Flex direction="column" flex={50}>
        <Padding all="s" fullWidth>
          <StoryCard
            title="Vaccine concerns"
            href="/concerns"
            src={story4}
            description="Still have concerns? No problem, we address them here."
            withIcon={["far", "frown-open"]}
          />
        </Padding>
      </Flex>
    </Flex>
  );
};

export default OtherStories;
