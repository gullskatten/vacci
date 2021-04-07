import React from "react";
import Margin from "../../styleguide/Margin";
import Text from "../../styleguide/Text";
import Flex from "../../styleguide/Flex";
import Padding from "../../styleguide/Padding";
import MainMatter from "../Content/MainMatter";
import MrnaBenefits from "./MrnaBenefits";
import GlossaryInfoList from "./GlossaryInfoList";
import { useLocation } from "react-router";
import aboutImage from "../../assets/images/about-covid-front.jpg";
import {
  BackgroundImage,
  BackgroundImageContainer,
} from "../../styleguide/BackgroundImage";
import CustomBackground from "../../styleguide/CustomBackground";
import NavigationLink from "../../styleguide/NavigationLink";
import AboutVacciSection from "./AboutVacciSection";
import LearnAboutSection from "./LearnAboutSection";
import styled from "styled-components";

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
          <AboutVacciSection />
          <LearnAboutSection />
        </Flex>
        <Flex basis={30} direction="column" fullHeight>
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
      <Margin top="m">
        <MrnaBenefits />
      </Margin>
    </MainMatter>
  );
};

export default Home;
