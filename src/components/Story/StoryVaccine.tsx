import React from "react";
import styled from "styled-components";
import { RouteContext } from "../../context/RouteContext";
import { useHistory } from "react-router";
import Background from "../../styleguide/Background";
import StoryModal from "./StoryModal";
import StoryContentVaccine from "./StoryContentVaccine";

const StoryVaccine: React.FC = () => {
  return (
    <StoryModal
      documentTitle="mRNA Vaccine Explained | Vacci.no"
      modalHeading="mRNA Vaccine"
    >
      <StoryContentVaccine />
    </StoryModal>
  );
};

export default StoryVaccine;
