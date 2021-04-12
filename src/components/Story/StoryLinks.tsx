import React from "react";
import story from "../../assets/pt1_f3-4_attachment_to_cell.webp";
import story2 from "../../assets/pt2_f1_vaccines_blink.webp";
import story3 from "../../assets/images/6_vaccinated_holding_hands.png";
import story4 from "../../assets/images/1_sceptical_person.png";
import Flex from "../../styleguide/Flex";
import StoryCard from "./StoryCard";

const StoryLinks: React.FC = () => {
  return (
    <Flex fullWidth breakAt={700} wrap="wrap" align="center" justify="center">
      <StoryCard
        title="SARS-CoV-2"
        href="/sars-cov-2"
        src={story}
        description="The SARS-CoV-2 virus in a nutshell."
        withIcon={"arrow-right"}
      />
      <StoryCard
        title="mRNA Vaccine"
        href="/mrna-vaccine"
        src={story2}
        description="The mRNA vaccine 101 and its effects on your body."
        withIcon={"arrow-right"}
      />
      <StoryCard
        title="Statistics"
        href="/statistics"
        src={story3}
        description="Numbers don’t lie; let’s look at the stats!"
        withIcon={["far", "chart-bar"]}
      />
      <StoryCard
        title="Vaccine concerns"
        href="/concerns"
        src={story4}
        description="Still have concerns? No problem, we address them here."
        withIcon={["far", "frown-open"]}
      />
    </Flex>
  );
};

export default StoryLinks;
