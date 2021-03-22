import React from "react";
import styled from "styled-components";
import Background from "../../styleguide/Background";
import Card from "../../styleguide/Card";
import Divider from "../../styleguide/Divider";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";

const BottomPositioned = styled.footer`
  width: 100%;
`;

const Footer: React.FC = () => {
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
              NTNU-students in the course MFEL4851 Experts in Team - The
              Personal Genome at the Norwegian University of Science and
              Technology. As two of four conditionally approved COVID-19
              vaccines in Norway are mRNA vaccines at the time of writing, we
              have chosen to focus on this vaccine type. This does not imply
              that we think that other vaccine types are inferior or unsuitable.
            </Text>
          </Padding>
        </Background>
      </Card>
    </BottomPositioned>
  );
};

export default Footer;
