import React from "react";
import { BackgroundImage } from "../../styleguide/BackgroundImage";
import Flex from "../../styleguide/Flex";
import Text from "../../styleguide/Text";
import pt1f1 from "../../assets/pt1_f1_cover.png";
import pt1f2 from "../../assets/pt1_f2_corona_virus.webp";
import pt1f3 from "../../assets/pt1_f3-4_attachment_to_cell.webp";
import pt1f5 from "../../assets/pt1_f5_details.png";
import CustomBackground from "../../styleguide/CustomBackground";
import Padding from "../../styleguide/Padding";
import Margin from "../../styleguide/Margin";
import { List, TinyListItem } from "../../styleguide/List";
import StyledLink from "../../styleguide/StyledLink";
import Grid from "../../styleguide/Grid";
import styled from "styled-components";
import StyledImage from "../../styleguide/StyledImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationLink from "../../styleguide/NavigationLink";

const StickyTitle = styled(CustomBackground)`
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

const StoryContentCovid: React.FC = () => {
  const [moreDetails, setMoreDetails] = React.useState<Boolean>(false);

  return (
    <Flex direction="column" fullWidth>
      <BackgroundImage src={pt1f1} height="300px" width="100%" />
      <StickyTitle background="primary" alpha="0.8" fullWidth>
        <Padding all="s">
          <Text variant="body" element="p" color="onPrimary" bold>
            Concerned People:
          </Text>
        </Padding>
      </StickyTitle>
      <Grid
        fullWidth
        breakAt={600}
        columnsLarge="auto auto auto"
        columnsMedium="auto auto auto"
        columnsSmall="auto"
      >
        <CustomBackground background="primary" alpha="0.5" fullWidth>
          <Padding all="m">
            <Text
              variant="body"
              element="p"
              color="onPrimary"
              textAlign="center"
            >
              Hi! My name is Bob. I don't feel too good today. I'm coughing,
              having a headache and feel really tired. I also think I'm getting
              a fever cause I feel so hot! The strangest part is that I cannot
              smell or taste anything! Yesterday, I was tested. It turns out
              that I have COVID-19.
            </Text>
          </Padding>
        </CustomBackground>
        <CustomBackground background="primary" alpha="0.6" fullWidth>
          <Padding all="m">
            <Text
              variant="body"
              element="p"
              color="onPrimary"
              textAlign="center"
            >
              Hi! My name is Lisa. The past couple of days, I have been feeling
              feverish. I'm sneezing and coughing all the time. Because this
              sounds as COVID-19, I got tested yesterday. However, I don't have
              this disease.
            </Text>
          </Padding>
        </CustomBackground>
        <CustomBackground background="primary" alpha="0.7" fullWidth>
          <Padding all="m">
            <Text
              variant="body"
              element="p"
              color="onPrimary"
              textAlign="center"
            >
              Hi! My name is Espen. I have a bit of a sore throat, but I always
              feel this way in the autumn. As my friend tested positive for
              COVID-19 in the weekend, I was adviced to get tested. Now I have
              to stay in isolation for 10 days as my test was positive as well…
            </Text>
          </Padding>
        </CustomBackground>
      </Grid>
      <Margin top="m">
        <Flex direction="column" fullWidth>
          <BackgroundImage src={pt1f2} height="400px" width="100%" />
          <StickyTitle background="error" alpha="0.8" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                The Coronavirus:
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="error" alpha="0.7" fullWidth>
            <Padding all="m">
              <Text variant="body" element="p" color="onPrimary">
                Hi, my name is{" "}
                <Text element="span" bold color="onPrimary">
                  SARS-CoV-2
                </Text>
                , but everyone just calls me{" "}
                <Text element="span" bold color="onPrimary">
                  the Coronavirus.
                </Text>
              </Text>
              <Text variant="body" element="p" color="onPrimary" gutterTop="s">
                I'm the one making Bob and Espen sick. I cause a severe
                respiratory illness called COVID-19. You may recognize me based
                on my characteristic spikes. Some think that the spikes resemble
                a crown, which is how I got the name Corona. I first appeared in
                Wuhan in China, but now I have spread across the entire globe.
                Unfortunately, I am unable to copy myself on my own, which is
                why I infect humans. I like to use their complex cells to
                reproduce myself.
              </Text>
            </Padding>
          </CustomBackground>
        </Flex>
      </Margin>

      <Margin top="m" fullWidth>
        <Flex direction="column" fullWidth>
          <BackgroundImage src={pt1f3} height="400px" width="100%" />
          <StickyTitle background="error" alpha="0.8" fullWidth>
            <Padding all="s">
              <Text variant="body" element="p" color="onPrimary" bold>
                Entering the cell:
              </Text>
            </Padding>
          </StickyTitle>
          <CustomBackground background="error" alpha="0.7" fullWidth>
            <Padding all="m" fullWidth>
              <Text variant="body" element="p" color="onPrimary">
                On the surface of the cells, they have some special parts called
                receptors.
              </Text>
              <Text variant="body" element="p" color="onPrimary" gutterTop="s">
                These are normally used for other functions in healthy cells,{" "}
                <Text element="span" bold color="onPrimary">
                  but I don't care!
                </Text>
              </Text>
              <Text variant="body" element="p" color="onPrimary" gutterTop="s">
                Thanks to my beautiful crown, I'm able to attach to them and
                enter the cells.
              </Text>
            </Padding>
            <StickyTitle background="error" alpha="0.3" fullWidth>
              <Padding all="s">
                <Text variant="body" element="p" color="onPrimary" bold>
                  Copying itself:
                </Text>
              </Padding>
            </StickyTitle>
          </CustomBackground>

          <CustomBackground background="error" alpha="0.6" fullWidth>
            <Padding all="m" fullWidth>
              <Text variant="body" element="p" color="onPrimary">
                When I get into the cells, I want to make copies of myself.
              </Text>
              <Text variant="body" element="p" color="onPrimary" gutterTop="s">
                I hijack the cell and trick it into making copies of my building
                parts as well as{" "}
                <Text element="span" bold color="onPrimary">
                  copies of the recipes for my building parts.
                </Text>{" "}
                In this way, I am able to generate many new viruses which are
                put together inside the cell before they are released. These new
                virus particles are free to infect other cells.
              </Text>
            </Padding>
          </CustomBackground>
          <CustomBackground background="error" alpha="0.6" clickable fullWidth>
            {!moreDetails && (
              <Padding all="m" onClick={() => setMoreDetails(!moreDetails)}>
                <Text
                  variant="body"
                  element="p"
                  color="onPrimary"
                  textAlign="center"
                  bold
                >
                  See this mechanism in more detail{" "}
                  <Text element="span" color="onPrimary" gutterLeft="s" bold>
                    <FontAwesomeIcon icon="chevron-down" />
                  </Text>
                </Text>
              </Padding>
            )}
            {moreDetails && (
              <>
                <Padding all="m">
                  <Text
                    variant="body"
                    color="onPrimary"
                    textAlign="center"
                    bold
                  >
                    Detailed view
                  </Text>
                </Padding>
                <StyledImage src={pt1f5} height="400px" width="100%" />
                <Padding left="l" right="l" top="m" bottom="m">
                  <List listStyle="decimal" color="onPrimary">
                    <TinyListItem>
                      <Text variant="body" color="onPrimary">
                        The virus attach to receptors on the cell. By doing
                        this, the virus can enter the cell.
                      </Text>
                    </TinyListItem>
                    <TinyListItem>
                      <Text variant="body" color="onPrimary">
                        The virus contains a recipe, called RNA, which specify
                        how to make copies of itself. This information is
                        delivered to the inside of the infected cell.
                      </Text>
                    </TinyListItem>
                    <TinyListItem>
                      <Text variant="body" color="onPrimary">
                        The virus hijacks the cellular machinery and use this to
                        make copies of the RNA and new building parts, called
                        proteins.
                      </Text>
                    </TinyListItem>
                    <TinyListItem>
                      <Text variant="body" color="onPrimary">
                        Newly made RNA and proteins are put together to form new
                        viruses.
                      </Text>
                    </TinyListItem>
                    <TinyListItem>
                      <Text variant="body" color="onPrimary">
                        The new viruses are released to the outside of the cell
                        and are ready to infect other cells.
                      </Text>
                    </TinyListItem>
                  </List>
                </Padding>

                <Padding all="m" onClick={() => setMoreDetails(!moreDetails)}>
                  <Text
                    variant="body"
                    color="onPrimary"
                    gutterTop="s"
                    textAlign="center"
                    bold
                  >
                    Hide details
                  </Text>
                </Padding>
              </>
            )}
            <StickyTitle background="error" alpha="0.8" fullWidth>
              <Padding all="s">
                <Text variant="body" element="p" color="onPrimary" bold>
                  The Coronavirus: Mohahah, nothing can stop me now! Right?
                </Text>
              </Padding>
              <NavigationLink
                title="Check out part 2 to find out"
                href="/mrna-vaccine"
                icon="arrow-right"
                textColor="onPrimary"
                iconColor="onPrimary"
                background="primary"
              />
            </StickyTitle>
          </CustomBackground>

          <CustomBackground background="error" alpha="0.5" fullWidth>
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
                      href="https://www.sciencedirect.com/science/article/pii/S1684118220300827?via%3Dihub"
                      textDecoration="underline"
                    >
                      Genotype and phenotype of COVID-19: Their roles in
                      pathogenesis
                    </StyledLink>
                  </Text>
                </TinyListItem>
                <TinyListItem>
                  <Text color="onPrimary" variant="pico">
                    <StyledLink
                      href="https://pubmed.ncbi.nlm.nih.gov/33116300/"
                      textDecoration="underline"
                    >
                      https://pubmed.ncbi.nlm.nih.gov/33116300/
                    </StyledLink>
                  </Text>
                </TinyListItem>
                <TinyListItem>
                  <Text color="onPrimary" variant="pico">
                    <StyledLink
                      href="https://www.cell.com/trends/immunology/fulltext/S1471-4906(20)30233-7"
                      textDecoration="underline"
                    >
                      https://www.cell.com/trends/immunology/fulltext/S1471-4906(20)30233-7
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

export default StoryContentCovid;
