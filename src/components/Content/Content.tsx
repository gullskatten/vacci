import React from "react";
import Margin from "../../styleguide/Margin";
import Text from "../../styleguide/Text";
import Story from "../Story/Story";
import Flex from "../../styleguide/Flex";
import StyledLink from "../../styleguide/StyledLink";
import Divider from "../../styleguide/Divider";
import styled from "styled-components";
import Background from "../../styleguide/Background";
import Padding from "../../styleguide/Padding";

const MaxWidth = styled(Background)`
  max-width: 1000px;
  margin-top: ${(props) => props.theme.spacing.m};
  @media all and (max-width: 1100px) {
    margin: ${(props) => props.theme.spacing.m};
  }
`;

const Content: React.FC = () => {
  return (
    <Flex fullWidth direction="column" align="center">
      <Margin top="m" bottom="m">
        <MaxWidth background="surface">
          <Padding all="m">
            <Flex direction="column" gap={10}>
              <Margin bottom="m">
                <Text variant="title" element="h2" color="onBackground">
                  About mRNA vaccines
                </Text>
                <Divider />

                <Text gutterTop="m" color="onBackground">
                  mRNA vaccines are a new type of vaccine to protect against
                  infectious diseases. To trigger an immune response, many
                  vaccines put a weakened or inactivated germ into our bodies.
                  Not mRNA vaccines. Instead, they teach our cells how to make a
                  protein—or even just a piece of a protein—that triggers an
                  immune response inside our bodies. That immune response, which
                  produces antibodies, is what protects us from getting infected
                  if the real virus enters our bodies.
                </Text>
                <Margin top="s">
                  <Text variant="pico" element="span">
                    <Text variant="pico" element="span" color="onBackground">
                      Source{" "}
                    </Text>
                    <StyledLink
                      color="onBackground"
                      href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html"
                    >
                      <Text
                        color="onBackground"
                        gutterLeft="s"
                        variant="pico"
                        element="span"
                        bold
                      >
                        CDC.gov
                      </Text>
                    </StyledLink>
                  </Text>
                </Margin>
              </Margin>
              <Margin>
                <Flex direction="column">
                  <Text variant="title" element="h2" color="onBackground">
                    A brief introduction to mRNA Vaccines
                  </Text>
                  <Text gutterTop="s" gutterBottom="s" color="onBackground">
                    These animations explains the concepts of both the mRNA
                    vaccine and the Corona virus.
                  </Text>
                </Flex>
                <Flex>
                  <Story />
                </Flex>
              </Margin>
            </Flex>
          </Padding>
        </MaxWidth>
      </Margin>
    </Flex>
  );
};

export default Content;
