import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flex from "../../styleguide/Flex";
import Margin from "../../styleguide/Margin";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";
import styled from "styled-components";
import CustomBackground from "../../styleguide/CustomBackground";
import { List, TinyListItem } from "../../styleguide/List";
import StyledLink from "../../styleguide/StyledLink";

const BenefitWrapper = styled.div`
  height: 300px;
  width: 300px;
`;

interface BenefitsProps {
  id: string;
  description: string;
  icon: IconProp;
}

interface BenefitCardProps {
  benefit: BenefitsProps;
}

const benefits: BenefitsProps[] = [
  {
    id: "1",
    description: "No risk for infection.",
    icon: "virus-slash",
  },
  {
    id: "2",
    description:
      "No risk for insertional mutagenesis (alterations in the DNA).",
    icon: "scroll",
  },
  {
    id: "3",
    description: "Production may be rapid, simple, inexpensive and scalable.",
    icon: "truck-loading",
  },
  {
    id: "4",
    description:
      "A standardized manufacturing process makes it possible to quickly develop vaccines against emerging infectious diseases.",
    icon: "hand-holding-medical",
  },
  {
    id: "5",
    description:
      "mRNA can be modified to improve its stability and translation (protein-production) efficiency.",
    icon: "shield-virus",
  },
];

const HugeIcon = styled(Text)`
  font-size: 4rem;
`;

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  return (
    <Flex flex={30} align="center" justify="center">
      <BenefitWrapper>
        <Flex align="center" justify="center" direction="column">
          <Margin bottom="m" top="m" fullWidth>
            <CustomBackground alpha="0.8" background="tertiary" fullWidth>
              <Padding all="s" fullWidth>
                <HugeIcon variant="title" color="surface" textAlign="center">
                  <FontAwesomeIcon icon={benefit.icon} />
                </HugeIcon>
              </Padding>
            </CustomBackground>
          </Margin>
          <Padding left="m" right="m">
            <Text textAlign="center" color="onSurface">
              {benefit.description}
            </Text>
          </Padding>
        </Flex>
      </BenefitWrapper>
    </Flex>
  );
};

const MrnaBenefits: React.FC = () => {
  return (
    <CustomBackground background="surface" alpha="0.5">
      <Padding all="l">
        <Text
          variant="title"
          color="onBackground"
          gutterBottom="m"
          textAlign="center"
        >
          Benefits of mRNA Vaccines
        </Text>
        <Flex justify="center" align="center" wrap="wrap" fullWidth>
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </Flex>
        <List>
          <TinyListItem>
            <Text variant="pico" element="p" color="onSurface" bold>
              Sources:
            </Text>
          </TinyListItem>
          <TinyListItem>
            <Text color="onSurface" variant="pico">
              <StyledLink
                href="https://www.nature.com/articles/nrd.2017.243"
                textDecoration="underline"
              >
                https://www.nature.com/articles/nrd.2017.243
              </StyledLink>
            </Text>
          </TinyListItem>
          <TinyListItem>
            <Text color="onSurface" variant="pico">
              <StyledLink
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7218962/"
                textDecoration="underline"
              >
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7218962/
              </StyledLink>
            </Text>
          </TinyListItem>
        </List>
      </Padding>
    </CustomBackground>
  );
};

export default MrnaBenefits;
