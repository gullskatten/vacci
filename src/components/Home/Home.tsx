import React from "react";
import Margin from "../../styleguide/Margin";
import Text from "../../styleguide/Text";
import Flex from "../../styleguide/Flex";
import Divider from "../../styleguide/Divider";
import Background from "../../styleguide/Background";
import Padding from "../../styleguide/Padding";
import AnimatedShortStories from "../Story/AnimatedShortStories";
import OtherStories from "../Story/OtherStories";
import MainMatter from "../Content/MainMatter";
import MrnaBenefits from "./MrnaBenefits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlossaryInfoList from "./GlossaryInfoList";
import { useLocation } from "react-router";
import aboutImage from "../../assets/images/about-covid-front.jpg";
import {
  BackgroundImage,
  BackgroundImageContainer,
} from "../../styleguide/BackgroundImage";
import CustomBackground from "../../styleguide/CustomBackground";
import NavigationLink from "../../styleguide/NavigationLink";

const Home: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const isHome = location.pathname === "/" || "";

    if (isHome) {
      document.body.className = "";
      document.title = "mRNA Vaccine Information";
    } else {
      document.body.className = "freeze";
    }
  }, [location.pathname]);

  return (
    <MainMatter>
      <BackgroundImage src={aboutImage}>
        <Flex align="center" justify="center" fullWidth fullHeight>
          <BackgroundImageContainer>
            <CustomBackground alpha="0.85" background="surface">
              <Padding all="l">
                <Text color="onSurface" variant="subtitle" textAlign="center">
                  Vacci aims to give readers a short introduction to mRNA
                  vaccines used against COVID-19.
                </Text>
              </Padding>
            </CustomBackground>
          </BackgroundImageContainer>
        </Flex>
      </BackgroundImage>

      <Flex justify="space-between" gap={10} breakAt={800}>
        <Flex basis={70} direction="column">
          <Background background="surface">
            <Padding all="l">
              <Text color="onBackground" gutterTop="m">
                In Norway, four vaccines against COVID-19 are currently given
                conditional approval. Two of these vaccines, the vaccines from
                Moderna and BioNTech/Pfizer, are so-called mRNA vaccines. This
                means that they use a short piece of the genetic material from
                the Coronavirus (SARS-CoV-2) to trigger an immune response in
                vaccinated individuals. This will train their immune system to
                recognize the Coronavirus and be ready to attack the intruder at
                later infections.{" "}
              </Text>
              <Text color="onBackground" bold gutterTop="m">
                An important benefit of mRNA vaccines is the possibility to
                standardize the production. Even for different viruses, many
                aspects of the manufacturing process remain the same. As a
                result, mRNA vaccines have been pointed out as an important tool
                against emerging infectious diseases, such as COVID-19.
              </Text>
              <Margin top="s">
                <Text variant="pico" element="span">
                  <Text variant="pico" element="span" color="onBackground" bold>
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
          <Background background="surface">
            <Padding all="l">
              <Flex direction="column" gap={10}>
                <Margin top="m" bottom="m">
                  <Text variant="title" element="h2" color="onBackground">
                    Learn about
                  </Text>
                  <Text
                    variant="body"
                    element="p"
                    color="onBackground"
                    gutterTop="m"
                  >
                    The complexities around SARS-CoV-2, the mRNA vaccine,
                    important statistics and vaccine concerns, with our simple,
                    easy-to-understand stories.
                  </Text>
                </Margin>
                <Flex align="center" justify="center" fullWidth>
                  <AnimatedShortStories />
                </Flex>

                <Margin top="m" bottom="m">
                  <Text
                    variant="title"
                    element="h2"
                    color="onBackgroundContrast"
                  >
                    Read more
                  </Text>
                </Margin>
                <Flex align="center" justify="center" fullWidth>
                  <OtherStories />
                </Flex>
              </Flex>
            </Padding>
          </Background>
        </Flex>
        <Flex basis={30} direction="column">
          <GlossaryInfoList />
          <Margin top="m">
            <Flex fullWidth direction="column">
              <NavigationLink
                icon={"arrow-right"}
                title="List of Vaccine Types"
                href="/vaccinetypes"
                fullWidth
              />
              <CustomBackground background="primary" alpha="0.1">
                <Padding all="m">
                  <Text color="onBackground" variant="pico">
                    mRNA vaccines are just one of many vaccine types. Click to
                    read a compiled a list of different vaccine types and their
                    traits.
                  </Text>
                </Padding>
              </CustomBackground>
            </Flex>
          </Margin>
        </Flex>
      </Flex>
      <MrnaBenefits />
    </MainMatter>
  );
};

export default Home;
