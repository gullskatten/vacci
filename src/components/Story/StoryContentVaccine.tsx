import React from "react";
import { BackgroundImage } from "../../styleguide/BackgroundImage";
import Flex from "../../styleguide/Flex";
import Text from "../../styleguide/Text";
import pt2f1 from "../../assets/pt2_f1_vaccines_blink.webp";
import pt2f2 from "../../assets/pt2_f1-2_zoomed_vaccine.webp";
import pt2f3 from "../../assets/images/getting_jab.png";
import pt2f3CrownDevelop from "../../assets/images/cell_crown_development.png";
import pt2f3AntigenCell from "../../assets/images/crown_antigen_cell.png";
import pt2f4 from "../../assets/pt2_f8_B_T_Cell.webp";
import pt2f5 from "../../assets/images/side_effects.png";
import pt2f6 from "../../assets/images/herd_immunity.png";
import CustomBackground from "../../styleguide/CustomBackground";
import Padding from "../../styleguide/Padding";
import Margin from "../../styleguide/Margin";
import { List, TinyListItem } from "../../styleguide/List";
import StyledLink from "../../styleguide/StyledLink";
import styled from "styled-components";
import NavigationLink from "../../styleguide/NavigationLink";

const StickyTitle = styled(CustomBackground)`
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

const StoryContentVaccine: React.FC = () => {
  return (
    <Flex direction="column" fullWidth>
      <BackgroundImage src={pt2f1} height="350px" width="100%" />
      <StickyTitle background="primary" alpha="0.8" fullWidth>
        <Padding all="s">
          <Text variant="body" element="p" color="onPrimary" bold>
            mRNA Vaccines:
          </Text>
        </Padding>
      </StickyTitle>

      <CustomBackground background="primary" alpha="0.5" fullWidth>
        <Padding all="m">
          <Text color="onPrimary">
            Hi everyone! We're{" "}
            <Text color="onPrimary" element="span" bold>
              mRNA vaccines!
            </Text>{" "}
          </Text>
          <Text color="onPrimary" gutterTop="s">
            We are part of a larger group called vaccines and we try to defeat
            the Coronavirus (SARS-CoV-2)! You might find my name familiar,
            perhaps you have hear of the vaccines from Pfizer/BioNTech or
            Moderna? They are part of my squad.
          </Text>
        </Padding>
      </CustomBackground>
      <Margin top="m">
        <Flex direction="column" fullWidth>
          <BackgroundImage src={pt2f2} height="400px" width="100%" />
          <StickyTitle background="tertiary" alpha="0.8" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                Vaccine content:
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="primary" alpha="0.7" fullWidth>
            <Padding all="m">
              <Text variant="body" element="p" color="onPrimary">
                We mRNA vaccines will train your body to recognize the
                Coronavirus!
              </Text>

              <Text color="onPrimary" gutterTop="s">
                How do we do this?
              </Text>
              <Text color="onPrimary" gutterTop="s">
                We deliver a small piece of the recipe, called mRNA, from the
                Coronavirus to your cells. This is used to teach special cells
                how to defeat the Coronavirus. Lets start from the beginning.
              </Text>
            </Padding>
          </CustomBackground>
        </Flex>
      </Margin>

      <Margin top="m" fullWidth>
        <Flex direction="column" fullWidth>
          <BackgroundImage src={pt2f3} height="450px" width="100%" />
          <StickyTitle background="error" alpha="0.8" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                "Getting the jab":
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="error" alpha="0.7" fullWidth>
            <Padding all="m" fullWidth>
              <Text color="onPrimary">
                We are injected into your upper arm and enter your cells.
              </Text>
              <Text color="onPrimary" gutterTop="s">
                Once we have delivered the recipe to a cell, our job is done.
                The rest is up to your cells.
              </Text>
            </Padding>
          </CustomBackground>
        </Flex>
      </Margin>
      <Margin top="m" fullWidth>
        <Flex fullWidth direction="column">
          <BackgroundImage
            src={pt2f3CrownDevelop}
            height="400px"
            width="100%"
          />
          <StickyTitle background="primary" alpha="0.8" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                Inside the cell:
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="primary" alpha="0.6" fullWidth>
            <Padding all="m" fullWidth>
              <Text color="onPrimary" gutterTop="s">
                The information in the recipe is used to make the crown from the
                Coronavirus. This part isn't infectious in itself.
              </Text>
              <Text color="onPrimary" gutterTop="s">
                The crown is broken down to smaller pieces and released from the
                cell.
              </Text>
            </Padding>
          </CustomBackground>
        </Flex>
      </Margin>

      <Margin top="m" fullWidth>
        <Flex fullWidth direction="column">
          <BackgroundImage src={pt2f3AntigenCell} height="450px" width="100%" />
          <StickyTitle background="primary" alpha="0.7" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                Antigen-presenting cells:
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="primary" alpha="0.6" fullWidth>
            <Padding all="m" fullWidth>
              <Text color="onPrimary">
                The small pieces of the crown are captured by special cells
                called antigen-presenting cells. These cells attach the pieces
                of the crown to their surface.
              </Text>
              <Text color="onPrimary" gutterTop="s">
                The antigen-presenting cells meet other agents of the immune
                system (more about them later) and show them the small crown
                pieces. This starts an important process in the immune system.
              </Text>
            </Padding>
          </CustomBackground>
        </Flex>
      </Margin>

      <Margin top="m" fullWidth>
        <Flex direction="column" fullWidth>
          <BackgroundImage src={pt2f4} height="400px" width="100%" />
          <StickyTitle background="primary" alpha="0.8" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                The Immune System:
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="primary" alpha="0.5" fullWidth>
            <Padding all="m" fullWidth>
              <Text color="onPrimary">
                The presented crowns can activate B and T cells, which are part
                of our natural immune system. B cells produce virus fighters
                (antibodies) which can bind to and inactivate virus particles.
                In contrast, T cells recognize and kill infected cells.
              </Text>
            </Padding>
          </CustomBackground>
          <CustomBackground background="primary" alpha="0.6" fullWidth>
            <Padding all="m" fullWidth>
              <Text color="onPrimary">
                The goal of all vaccines is to save some of the activated immune
                cells as memory cells. These cells may remember what the crown
                looked like and will be ready to attack the Coronavirus or any
                cell infected by the Coronavirus in later infections.
              </Text>
            </Padding>
          </CustomBackground>
          <CustomBackground background="primary" alpha="0.7" fullWidth>
            <Padding all="m" fullWidth>
              <Text color="onPrimary">
                This means that the next time the cells in your body, instead of
                the body having to try out several different ways to fight it,
                they already know how to fight it. As a result, it may stop the
                virus from spreading before it gets a hold of your body.
              </Text>
            </Padding>
          </CustomBackground>
        </Flex>
      </Margin>

      <Margin top="m" fullWidth>
        <Flex direction="column" fullWidth>
          <BackgroundImage src={pt2f5} height="450px" width="100%" />
          <StickyTitle background="primary" alpha="0.8" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                Side-effects:
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="primary" alpha="0.5" fullWidth>
            <Padding all="m" fullWidth>
              <Text color="onPrimary">
                I'm sorry to say that I might cause some side-effects. It is
                common to experience some pain, swelling and redness where you
                got the injection. Other side-effects include fatigue,
                headaches, muscle pain, chills, joint pain and/or fever.
              </Text>
            </Padding>
          </CustomBackground>
          <NavigationLink
            title="Read more about side-effects on the Statistics page"
            href="/mrna-vaccine"
            icon={["far", "chart-bar"]}
            textColor="onPrimary"
            iconColor="onPrimary"
            background="primary"
            fullWidth
          />
        </Flex>
      </Margin>

      <Margin top="m" fullWidth>
        <Flex direction="column" fullWidth>
          <BackgroundImage src={pt2f6} height="450px" width="100%" />
          <StickyTitle background="primary" alpha="0.5" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                Herd Immunity:
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="primary" alpha="0.6" fullWidth>
            <Padding all="m" fullWidth>
              <Text color="onPrimary">
                Assuming that I work efficiently, we might get something called
                herd immunity. This means that if a large enough proportion of
                the population is vaccinated, we might stop the spread of the
                Coronavirus. Unvaccinated persons will be indirectly protected
                at this point. It has been estimated that between 50% and 83% of
                the population need to be immune to the Coronavirus in order to
                reach herd immunity.
              </Text>
            </Padding>
          </CustomBackground>

          <CustomBackground background="primary" alpha="0.7" fullWidth>
            <Padding all="m">
              <List>
                <TinyListItem>
                  <Text variant="pico" element="p" color="onPrimary" bold>
                    Sources:
                  </Text>
                </TinyListItem>
                <TinyListItem>
                  <Text color="onPrimary" variant="pico">
                    <StyledLink
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7236739/"
                      textDecoration="underline"
                    >
                      https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7236739/
                    </StyledLink>
                  </Text>
                </TinyListItem>
                <TinyListItem>
                  <Text color="onPrimary" variant="pico">
                    <StyledLink
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7218962/"
                      textDecoration="underline"
                    >
                      https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7218962/
                    </StyledLink>
                  </Text>
                </TinyListItem>
                <TinyListItem>
                  <Text color="onPrimary" variant="pico">
                    <StyledLink
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7778607/"
                      textDecoration="underline"
                    >
                      https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7778607/
                    </StyledLink>
                  </Text>
                </TinyListItem>
                <TinyListItem>
                  <Text color="onPrimary" variant="pico">
                    <StyledLink
                      href="https://www.who.int/publications/m/item/draft-landscape-of-covid-19-candidate-vaccines"
                      textDecoration="underline"
                    >
                      WHO: Draft Landscape of COVID-19 Candidate Vaccines
                    </StyledLink>
                  </Text>
                </TinyListItem>
              </List>
            </Padding>
          </CustomBackground>
        </Flex>
      </Margin>
    </Flex>
  );
};

export default StoryContentVaccine;
