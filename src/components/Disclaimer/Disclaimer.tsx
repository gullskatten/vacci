import React from "react";
import styled from "styled-components";
import Background from "../../styleguide/Background";
import Card from "../../styleguide/Card";
import Divider from "../../styleguide/Divider";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";

const BottomPositioned = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Disclaimer: React.FC = () => {
  return (
    <BottomPositioned>
      <Card>
        <Background background="primary">
          <Padding all="m">
            <Text element="h3" variant="subtitle" color="onPrimary">
              About vacci.no
            </Text>
            <Divider color="secondary" />
            <Text color="onPrimary">
              Vacci, or "Vaccinformation" is a website made by a group of
              NTNU-students in the course EIT.
            </Text>
          </Padding>
        </Background>
      </Card>
    </BottomPositioned>
  );
};

export default Disclaimer;
