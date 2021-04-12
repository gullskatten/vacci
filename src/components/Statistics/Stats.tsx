import React from "react";
import Background, { BackdropBackground } from "../../styleguide/Background";
import Flex from "../../styleguide/Flex";
import Padding from "../../styleguide/Padding";
import StyledImage from "../../styleguide/StyledImage";
import Text from "../../styleguide/Text";
import MainMatter from "../Content/MainMatter";
import Margin from "../../styleguide/Margin";
import StyledLink from "../../styleguide/StyledLink"
import { BackgroundImage } from "../../styleguide/BackgroundImage";
import CustomBackground from "../../styleguide/CustomBackground";
import statisticsBanner from "../../assets/images/statistics.jpg";
import statisticsBannerOne from "../../assets/images/statistics1.jpg";
import statisticsBannerTwo from "../../assets/images/statistics2.jpg";
import sideEffects from "../../assets/images/side_effects_py.png";
import styled from "styled-components";
import vaccineEff from "../../assets/images/vaccine_efficacy_py.png";

const MaxWidthWrapper = styled.div`
  max-width: 800px;
  width: 100%;
`;

const Stats: React.FC = () => {
  return (
    <MainMatter>
      <Background background="onError" fullWidth>
        <Padding all="l">
        <BackgroundImage src={statisticsBannerTwo} height="auto">
        <CustomBackground background="primary" alpha="0.5">
          <Padding all="m">
          <Text variant="title" element = "h1" color = "onPrimary">
            Statistics
          </Text>
          <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            Concering the COVID-19 pandemic and the mRNA vaccines
          </Text>
            <Text variant="body" element="p" color="onPrimary" gutterTop="m">
            A lot of statistics has been presented since the start of the COVID-19 pandemic. 
              On this page we have gathered some of the most relevant statistics concerning the 
              pandemic in Norway and the mRNA vaccines. This includes number of confirmed cases 
              of COVID-19 and number of deaths related to COVID-19, as well as number of tests taken 
              and number of COVID-19 patients in the hospital. For the vaccines, 
              statistics about the vaccination, side effects and vaccine efficacy is presented.
            </Text>
          </Padding>
        </CustomBackground>
      </BackgroundImage>
          
        </Padding>
        <Background background = "onError">
        <Padding all = "l">
          <Text variant = "title" element = "h1" color = "onSurface">
            About the pandemic
          </Text>
          <Padding top = 'm' bottom = 'l'>
          <Text variant = "body" element = "h3" color = "onSurface">
            The numbers and graphs regarding the pandemic are all gathered from Our World in Data 
            <Text color="onSurface" element="span" bold>
                 [1]
            </Text>
            . 
          </Text>
          </Padding>
          <Padding bottom = "m">
            <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            Daily new confirmed COVID-19 in Norway and the world
            </Text>
          </Padding>
          <Flex direction = "column" fullWidth>
            <Padding bottom = "l">
            <Text variant = "body" element ="h3" color ="onSurface">
            The daily new confirmed COVID-19 cases per million people in Norway and in the world is presented as a graph below. 
            It is the 7-day average which is displayed. 
            The number of confirmed cases per million people are plotted as a function of the dates, 
            counting from 28th of January 2020 until today. In the graph, one can also compare the confirmed 
            cases of Norway and of the world. 
            </Text>
            </Padding>
            <Flex align = "center" fullWidth justify = "center">
            <MaxWidthWrapper>
            <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=40..latest&pickerSort=asc&pickerMetric=location&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=NOR~OWID_WRL&hideControls=true" loading="lazy" style={{width: "100%", height: "600px", border: "0px none"}}></iframe>
            </MaxWidthWrapper>
            </Flex>
            <Padding bottom = "l"></Padding>
          </Flex>
          <Padding bottom = "m">
            <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            Daily new COVID-19 tests in Norway
            </Text>
          </Padding>
          <Flex direction = "column" fullWidth>
            <Padding bottom = "l">
            <Text variant = "body" element ="h3" color ="onSurface">
            Below, a graph presenting the daily new COVID-19 tests per 1000 people in Norway is displayed. The data that is 
            graphed is based on a 7-day average, and the daily new 
            COVID-19 tests is plotted as a function of the dates starting 2nd of March 
            2020 until the 16th of March 2021. 
            </Text>
            </Padding>
            <Flex align = "center" fullWidth justify = "center">
            <MaxWidthWrapper>
            <iframe src="https://ourworldindata.org/grapher/daily-tests-per-thousand-people-smoothed-7-day?tab=chart&country=~NOR" loading="lazy" style={{width: "100%", height: "600px", border: "0px none"}}></iframe>
            </MaxWidthWrapper>
            </Flex>
            <Padding bottom = "l"></Padding>
          </Flex>
          <Padding bottom = "m">
            <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            Daily new confirmed COVID-19 deaths in Norway and the world
            </Text>
          </Padding>
          <Flex direction = "column" fullWidth>
            <Padding bottom = "l">
            <Text variant = "body" element ="h3" color ="onSurface">
            A graph containing the daily new confirmed COVID-19 deaths per million people in Norway 
            and in the world is displayed below. The data is plotted as a function of the dates, 
            starting the 28th of January 2020 until 20th of March 2021. Shown is the 7-day average. 
            Both the daily new confirmed COVID-19 deaths registered in Norway and in the world are displayed, 
            so that the data can be compared. 
            </Text>
            </Padding>
            <Flex align = "center" fullWidth justify = "center">
            <MaxWidthWrapper>
            <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&pickerSort=desc&pickerMetric=new_deaths_per_million&Metric=Confirmed+deaths&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=NOR~OWID_WRL&hideControls=true" loading="lazy" style={{width: "100%", height: "600px", border: "0px none"}}></iframe>
            </MaxWidthWrapper>
            </Flex>
            <Padding bottom = "l"></Padding>
          </Flex>
          <Padding bottom = "m">
            <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            Number of COVID-19 patients in hospital
            </Text>
          </Padding>
          <Flex direction = "column" fullWidth>
            <Padding bottom = "l">
            <Text variant = "body" element ="h3" color ="onSurface">
            A graph displaying the number of COVID-19 patients in the hospital is presented below. 
            As one can see, the number of COVID-19 patients in hospital was at its highest at the start of the pandemic, 
            and the number has increased the last six months.
            </Text>
            </Padding>
            <Flex align = "center" fullWidth justify = "center">
            <MaxWidthWrapper>
            <iframe src="https://ourworldindata.org/grapher/current-covid-patients-hospital?time=earliest..latest&country=~NOR" loading="lazy" style={{width: "100%", height: "600px", border: "0px none"}}></iframe>
            </MaxWidthWrapper>
            </Flex>
            <Padding bottom = "l"></Padding>
          </Flex>
          <Padding bottom = "m">
            <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            COVID-19 vaccine doses administered in Norway
            </Text>
          </Padding>
          <Flex direction = "column" fullWidth>
            <Padding bottom = "l">
            <Text variant = "body" element ="h3" color ="onSurface">
            Presented below is a graph displaying the number of COVID-19 vaccine doses administered per 100 people in Norway, 
            as a function of the date. The graph starts on December 13th 2020, and ends March 20th 2021. 
            The data is counted as a single dose, meaning that it may not be equal to the total number of people vaccinated. 
            </Text>
            </Padding>
            <Flex align = "center" fullWidth justify = "center">
            <MaxWidthWrapper>
            <iframe src="https://ourworldindata.org/grapher/cumulative-covid-vaccinations?country=NOR~OWID_WRL" loading="lazy" style={{width: "100%", height: "600px", border: "0px none"}}></iframe>
            </MaxWidthWrapper>
            </Flex>
            <Padding bottom = "l"></Padding>
          </Flex>
        </Padding>
        </Background>
        <Background background = "onError">
          <Padding all = "l">
            <Text variant = "title" element = "h1" color = "onSurface">
            About mRNA vaccines
            </Text>
            <Margin bottom = "m">
            <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            Reported side effects
            </Text>
            </Margin>
            <Margin bottom = "l">
            <Text variant = "body" element = "h3" color = "onSurface">
            Reported side effects on the Moderna and Pfizer/BioNTech vaccine is displayed below. 
            The graph presents the reported cases of each side effect as a percentage, 
            and the data is collected from MedShadow 
            <Text color="onSurface" element="span" bold>
                 [2]
            </Text>
            . As one can see from this graph, injection site reactions are the most common reported side effect from 
            the Moderna and Pfizer/BioNTech vaccine, while swollen lymph nodes is the least common one. 
            </Text>
            </Margin>
            <Flex align = "center" fullWidth justify = "center">
          <StyledImage src = {sideEffects} width = "60%" height = "auto"/>
          </Flex>
          
          <Margin bottom = "m">
            <Text variant = "subtitle" element = "h2" color = "onBackgroundContrast">
            Vaccine efficacy
            </Text>
            </Margin>
            <Margin bottom = "l">
            <Text variant = "body" element = "h3" color = "onSurface">
            The efficacy rate of several vaccines are presented in the graph below. As one can see, 
            the Pfizer and Moderna vaccines have a relatively high efficacy rate. The different vaccine types are 
            included for comparison with the mRNA vaccine efficacy. Amongst them is the Johnson&Johnson COVID-19 vaccine, 
            which is a viral vectored vaccine against the Corona virus 
            <Text color="onSurface" element="span" bold>
                 [3]
            </Text>
            . This vaccine has an efficacy that is lower than both the Moderna 
            and the Pfizer vaccine, but as these vaccines have different designs for trial, comparison of their efficacy 
            rate may not be so accurate. 
            </Text>
            </Margin>
            <Flex align = "center" fullWidth justify = "center">
          <StyledImage src = {vaccineEff} width = "60%" height = "auto"/>
          </Flex>
          <Text color="onSurface" gutterTop="m" bold>
              References
          </Text>
          <Text color="onSurface" variant="pico" gutterTop="m">
          <StyledLink href="https://ourworldindata.org/coronavirus"
                    textDecoration="underline"
                  >
                    [1] Our World in Data
            
            </StyledLink>
          </Text>
          <Text color="onSurface" variant="pico" gutterTop="m">
          <StyledLink href="https://medshadow.org/covid19-vaccine-side-effects/"
                    textDecoration="underline"
                  >
                    [2] MedShadow
            
            </StyledLink>
          </Text>
          <Text color="onSurface" variant="pico" gutterTop="m">
            <StyledLink
              
                    href="https://www.statnews.com/2021/02/02/comparing-the-covid-19-vaccines-developed-by-pfizer-moderna-and-johnson-johnson/"
                    textDecoration="underline">
                    [3] STAT
                  </StyledLink>
                </Text>
                </Padding>
        </Background>
      </Background>
    </MainMatter> 
  );
};

export default Stats; 