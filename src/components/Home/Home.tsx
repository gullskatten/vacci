import React from "react";
import Margin from "../../styleguide/Margin";
import Text from "../../styleguide/Text";
import Flex from "../../styleguide/Flex";
import Divider from "../../styleguide/Divider";
import Background, { BackdropBackground } from "../../styleguide/Background";
import Padding from "../../styleguide/Padding";
import AnimatedShortStories from "../Story/AnimatedShortStories";
import OtherStories from "../Story/OtherStories";
import MainMatter from "../Content/MainMatter";
import QuickNavigationList from "./QuickNavigationList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: React.FC = () => {
  return (
    <MainMatter>
      <Margin bottom="m">
        <BackdropBackground background="secondary" />
        <Padding left="l" right="l" fullWidth>
          <Flex justify="space-between" gap={10} breakAt={800}>
            <Flex basis={70}>
              <Background background="surface">
                <Padding all="l">
                  <Text variant="title" element="h2" color="onBackground">
                    <Text
                      variant="title"
                      element="span"
                      color="primary"
                      gutterRight="s"
                    >
                      <FontAwesomeIcon
                        icon={["far", "lightbulb"]}
                      ></FontAwesomeIcon>
                    </Text>
                    About Vacci
                  </Text>
                  <Divider />
                  <Text gutterTop="m" color="onBackground">
                    Vacci aims to give readers a short introduction to mRNA
                    vaccines used against COVID-19.
                  </Text>
                  <Text color="onBackground" gutterTop="m">
                    In Norway, four vaccines against COVID-19 are currently
                    given conditional approval. Two of these vaccines, the
                    vaccines from Moderna and BioNTech/Pfizer, are so-called
                    mRNA vaccines. This means that they use a short piece of the
                    genetic material from the Coronavirus (SARS-CoV-2) to
                    trigger an immune response in vaccinated individuals. This
                    will train their immune system to recognize the Coronavirus
                    and be ready to attack the intruder at later infections.{" "}
                  </Text>
                  <Text color="onBackground" bold gutterTop="m">
                    An important benefit of mRNA vaccines is the possibility to
                    standardize the production. Even for different viruses, many
                    aspects of the manufacturing process remain the same. As a
                    result, mRNA vaccines have been pointed out as an important
                    tool against emerging infectious diseases, such as COVID-19.
                  </Text>
                  <Margin top="s">
                    <Text variant="pico" element="span">
                      <Text
                        variant="pico"
                        element="span"
                        color="onBackground"
                        bold
                      >
                        Last updated:{" "}
                      </Text>

                      <Text
                        color="onBackgroundContrast"
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
            </Flex>
            <Flex basis={30}>
              <QuickNavigationList />
            </Flex>
          </Flex>
        </Padding>
      </Margin>
      <Background background="surface">
        <Padding all="l">
          <Flex direction="column" gap={10}>
            <Margin top="m" bottom="m">
              <Text variant="title" element="h2" color="onBackground">
                Learn it simple
              </Text>
              <Text
                variant="body"
                element="p"
                color="onBackground"
                gutterTop="m"
              >
                These stories aims to explain more advanced concepts using
                simple graphics.
              </Text>
            </Margin>
            <Flex align="center" justify="center" fullWidth>
              <AnimatedShortStories />
            </Flex>

            <Margin top="m" bottom="m">
              <Text variant="title" element="h2" color="onBackgroundContrast">
                Read more
              </Text>
            </Margin>
            <Flex align="center" justify="center" fullWidth>
              <OtherStories />
            </Flex>
          </Flex>
        </Padding>
      </Background>
    </MainMatter>
  );
};

export default Home;
