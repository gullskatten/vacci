import React from "react";
import Background, { BackdropBackground } from "../../styleguide/Background";
import Flex from "../../styleguide/Flex";
import Padding from "../../styleguide/Padding";
import StyledImage from "../../styleguide/StyledImage";
import Text from "../../styleguide/Text";
import MainMatter from "../Content/MainMatter";
import srcOldPerson from "../../assets/images/4_old_person.png";
import srcMildFeverPerson from "../../assets/images/2_person_with_mild_fever.png";
import srcScepticalPerson from "../../assets/images/1_sceptical_person_cropped.png";
import Margin from "../../styleguide/Margin";
import StyledLink from "../../styleguide/StyledLink";

const Concerns: React.FC = () => {
  return (
    <MainMatter>
      <Background background="surface" fullWidth>
        <Padding all="l">
          <Text variant="title" element="h1" color="onSurface">
            Vaccine concerns
          </Text>
          <Text variant="subtitle" element="h2" color="onBackgroundContrast">
            Are you concerned about the Covid-19 vaccine?
          </Text>

          <Flex>
            <Flex basis={70} direction="column">
              <Text color="onSurface" gutterTop="m">
                Having concerns about unknown and unfamiliar things is part of
                human nature. So if you do have concerns about the Covid-19
                vaccine, you are propably a human.
              </Text>

              <Text color="onSurface" gutterTop="m">
                However, I am guessing you would agree, that when it comes to
                making decisions important both for your own, as well as the
                public health, you should not base your decision on whether
                something is unfamiliar or not. Rather, you should educate
                yourself, and become familiar with it.
              </Text>

              <Text color="onSurface" gutterTop="m">
                Luckily, that is what we are here to help you with! We will try
                look at the concerns you might have, and try to give you the
                most relevant and accurate information out there - as well as
                letting you know where information might be lacking.
              </Text>
              <Text color="onSurface" gutterTop="m">
                We will not tell you whether or not you, in the end, should be
                concerned about taking the vaccine. We can only hope that after
                this presentation your attitude towards the vaccines is more
                informed, and that this information will guide your final
                decisions in vaccine taking.
              </Text>
            </Flex>
            <Flex basis={30}>
              <Flex align="center" justify="center" fullWidth>
                <StyledImage src={srcScepticalPerson} height={250} />
              </Flex>
            </Flex>
          </Flex>
        </Padding>
        <BackdropBackground background="secondary" />
        <Padding left="l" right="l" fullWidth>
          <Background background="surface">
            <Padding all="l">
              <Text variant="subtitle" element="h2" color="onSurface">
                Concern 1: Side effects
              </Text>
              <Flex fullWidth align="center" wrap="wrap" breakAt={400}>
                <Flex basis={70}>
                  <Text gutterTop="m" color="onSurface">
                    A main concern about the Covid-19 vaccine is the side
                    effects. Indeed, some people get side effects from the
                    vaccines. Almost all of them mild, while a few are more
                    severe. There are several ways to get information about the
                    prevalence and severity of these side effects. Here we will
                    look at some that can give us some necessary pointers.
                  </Text>
                </Flex>
                <Flex basis={30} align="center" justify="center">
                  <StyledImage src={srcOldPerson} height={150} />
                </Flex>
              </Flex>
            </Padding>
          </Background>
        </Padding>

        <Padding all="l">
          <Text variant="title" element="h1" color="onSurface">
            A Dive Into the Numbers
          </Text>
          <Flex>
            <Flex direction="column" basis={70}>
              <Text color="onSurface" gutterTop="m">
                In a report from legemiddelverket (updated march 2nd), they
                found that while there have been 510 000 administered vaccine
                shots in Norway, there were only 3636 reports of suspected side
                effects{" "}
                <Text color="onSurface" element="span" bold>
                  [1]
                </Text>
                .
              </Text>

              <Text color="onSurface" gutterTop="m">
                This is however not necessarily an accurate representations of
                the number of people who get side effects, as it is not likely
                that everyone who experienced side effects reported them. Also,
                it is not certain whether the symptoms reported is linked to the
                vaccine.
              </Text>

              <Text color="onSurface" gutterTop="m">
                Other studies have found that just over 50 % of people who are
                vaccinated in Norway get mild side effects like soreness where
                the vaccine was taken, headaches and tiredness{" "}
                <Text color="onSurface" element="span" bold>
                  [4]
                </Text>
                . Many also report experiencing muscle achings and chills. A bit
                less than 5 % experience more severe local and systemic side
                effects, which affected their daily life (for the few days they
                experienced it).
              </Text>
              <Text color="onSurface" gutterTop="m">
                A very small number of people, 2-11 cases out of a million
                administrations to be exact, experience severe allergic
                reactions to corona vaccines. In "normal" vaccine this
                prevalence is lower, at about 0,8 out of every one million
                administrations. Because of this, every institutions that is
                allowed to administer vaccines, needs to have functioning
                protocols for dealing with possible allergic reactions{" "}
                <Text color="onSurface" element="span" bold>
                  [2]
                </Text>
                .
              </Text>

              <Text color="onSurface" gutterTop="m" bold>
                References
              </Text>
              <Text color="onSurface" variant="pico" gutterTop="m">
                <StyledLink
                  href="https://legemiddelverket.no/Documents/Bivirkninger%20og%20sikkerhet/Rapporter%20og%20oversikter/Koronavaksiner/20210302Rapport%20over%20meldte%20bivirkninger%20av%20koronavaksine.pdf"
                  textDecoration="underline"
                >
                  [1] Legemiddelverket
                </StyledLink>
              </Text>
              <Text color="onSurface" variant="pico" gutterTop="m">
                <StyledLink
                  href=" https://www.dagensmedisin.no/artikler/2021/02/18/flere-far-anafylaksi-med-koronavaksine--kan-skyldes-fyllstoff/"
                  textDecoration="underline"
                >
                  [2] Dagens Medisin
                </StyledLink>
              </Text>
            </Flex>
            <Flex basis={30} direction="column">
              <Margin bottom="m" fullWidth>
                <Flex align="center" justify="center" fullWidth>
                  <StyledImage src={srcMildFeverPerson} />
                </Flex>
              </Margin>
              <Margin bottom="m" fullWidth>
                <Flex
                  align="center"
                  justify="center"
                  fullWidth
                  direction="column"
                >
                  <Text variant="title" color="primary" element="h3">
                    50%
                  </Text>
                  <Text color="onSurface" gutterTop="s">
                    Experience mild symptoms
                  </Text>
                </Flex>
              </Margin>
              <Margin bottom="m" fullWidth>
                <Flex
                  align="center"
                  justify="center"
                  fullWidth
                  direction="column"
                >
                  <Text variant="title" color="secondary" element="h3">
                    {"<5%"}
                  </Text>
                  <Text color="onSurface" gutterTop="s">
                    More severe side effects
                  </Text>
                </Flex>
              </Margin>
            </Flex>
          </Flex>
        </Padding>
      </Background>
    </MainMatter>
  );
};

export default Concerns;
