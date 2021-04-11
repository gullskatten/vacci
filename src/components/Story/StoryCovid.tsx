import React from "react";
import StoryContentCovid from "./StoryContentCovid";
import StoryModal from "./StoryModal";

const StoryCovid: React.FC = () => {
  return (
    <StoryModal
      documentTitle="SARS-COV-2 Explained | Vacci.no"
      modalHeading="SARS-COV-2"
    >
      <StoryContentCovid />
    </StoryModal>
  );
};

export default StoryCovid;
