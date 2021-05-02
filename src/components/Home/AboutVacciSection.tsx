import React from "react";
import Background from "../../styleguide/Background";
import Margin from "../../styleguide/Margin";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";

const AboutVacciSection: React.FC = () => {
  return (
    <Background background="surface">
      <Padding all="l">
        <Text color="onBackground" gutterTop="m">
          In Norway, four vaccines against COVID-19 are currently given
          conditional approval. Two of these vaccines, the vaccines from Moderna
          and BioNTech/Pfizer, are so-called mRNA vaccines. This means that they
          use a short piece of the genetic material from the Coronavirus
          (SARS-CoV-2) to trigger an immune response in vaccinated individuals.
          This will train their immune system to recognize the Coronavirus and
          be ready to attack the intruder at later infections.{" "}
        </Text>
        <Text color="onBackground" bold gutterTop="m">
          An important benefit of mRNA vaccines is the possibility to
          standardize the production. Even for different viruses, many aspects
          of the manufacturing process remain the same. As a result, mRNA
          vaccines have been pointed out as an important tool against emerging
          infectious diseases, such as COVID-19.
        </Text>
        <Margin top="s">
          <Text variant="pico" element="span">
            <Text variant="pico" element="span" color="onBackground" bold>
              Last updated:{" "}
            </Text>

            <Text
              color="onBackground"
              gutterLeft="s"
              variant="pico"
              element="span"
            >
              21.03.2021
            </Text>
          </Text>
        </Margin>
      </Padding>
    </Background>
  );
};

export default AboutVacciSection;
