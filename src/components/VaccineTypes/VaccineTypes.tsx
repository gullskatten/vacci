import React from "react";
import Overlay from "../../styleguide/Overlay";
import styled from "styled-components";
import Margin from "../../styleguide/Margin";
import Text from "../../styleguide/Text";
import { RouteContext } from "../../context/RouteContext";
import { useHistory } from "react-router";
import Modal from "../../styleguide/Modal";
import Flex from "../../styleguide/Flex";
import StyledLink from "../../styleguide/StyledLink";
import StyledRouterLink from "../../styleguide/StyledRouterLink";
import VaccineTypesTable from "./VaccineTypesTable";
import Background from "../../styleguide/Background";
import { List, TinyListItem } from "../../styleguide/List";

const Relative = styled.div`
  position: relative;
`;

const StickyTitle = styled(Background)`
  position: sticky;
  top: 0;
  padding: ${(props) => props.theme.spacing.m}
    ${(props) => props.theme.spacing.s};

  width: 100%;
`;

const VaccineTypes: React.FC = () => {
  const { setRoute } = React.useContext(RouteContext);
  const history = useHistory();

  React.useEffect(() => {
    document.title = "List Of Vaccine Types - Vacci.no";
  }, []);

  const routeToHome = () => {
    history.push("/");
    setRoute("/");
  };

  return (
    <Relative>
      <Flex justify="center" align="center" fullWidth>
        <Margin top="l" fullWidth>
          <Modal>
            <StickyTitle background="surface">
              <Flex fullWidth justify="space-between" align="center">
                <Text variant="title" color="onBackground" element="h1">
                  Vaccine Types
                </Text>
                <Text color="onBackground" element="span">
                  <StyledRouterLink to="/" textDecoration="underline">
                    Close
                  </StyledRouterLink>
                </Text>
              </Flex>
            </StickyTitle>
            <Text variant="body" color="onSurface" element="p" gutterTop="m">
              All vaccines share a common goal. Their aim is to provide
              protection against a disease. This is accomplished by triggering
              an immune response in the vaccinated individual. As a result, the
              immune system will be able to “remember” the intruder causing the
              disease and attack it if you encounter the intruder in the future.
            </Text>
            <Text variant="body" color="onSurface" element="p" gutterTop="m">
              There exist many different vaccine types. Some of the types used
              against COVID-19, along with examples of each type, are presented
              in the table below. WHO provides a more detailed overview of the
              “landscape of novel coronavirus candidate vaccine development
              worldwide”. You can find it{" "}
              <Text element="span" color="onSurface">
                {" "}
                <StyledLink
                  href="https://www.who.int/publications/m/item/draft-landscape-of-covid-19-candidate-vaccines"
                  textDecoration="underline"
                >
                  here
                </StyledLink>
                .
              </Text>
            </Text>
            <Margin top="l" bottom="s">
              <VaccineTypesTable />
            </Margin>
            <List>
              <TinyListItem>
                <Text variant="pico" element="p" color="onSurface" bold>
                  Sources:
                </Text>
              </TinyListItem>
              <TinyListItem>
                <Text color="onSurface" variant="pico">
                  <StyledLink
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7778607/"
                    textDecoration="underline"
                  >
                    https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7778607/
                  </StyledLink>
                </Text>
              </TinyListItem>
              <TinyListItem>
                <Text color="onSurface" variant="pico">
                  <StyledLink
                    href="https://www.who.int/publications/m/item/draft-landscape-of-covid-19-candidate-vaccines"
                    textDecoration="underline"
                  >
                    https://www.who.int/publications/m/item/draft-landscape-of-covid-19-candidate-vaccines
                  </StyledLink>
                </Text>
              </TinyListItem>
            </List>

            <List>
              <TinyListItem>
                <Text variant="pico" element="p" color="onSurface" bold>
                  Inspired by:
                </Text>
              </TinyListItem>
              <TinyListItem>
                <Text color="onSurface" variant="pico">
                  <StyledLink
                    href="https://www.nature.com/articles/d41586-020-01221-y"
                    textDecoration="underline"
                  >
                    https://www.nature.com/articles/d41586-020-01221-y
                  </StyledLink>
                </Text>
              </TinyListItem>
              <TinyListItem>
                <Text color="onSurface" variant="pico">
                  <StyledLink
                    href="https://www.immunology.org/coronavirus/connect-coronavirus-public-engagement-resources/types-vaccines-for-covid-19"
                    textDecoration="underline"
                  >
                    https://www.immunology.org/coronavirus/connect-coronavirus-public-engagement-resources/types-vaccines-for-covid-19
                  </StyledLink>
                </Text>
              </TinyListItem>
              <TinyListItem>
                <Text color="onSurface" variant="pico">
                  <StyledLink
                    href="https://extranet.who.int/pqweb/sites/default/files/documents/Status_COVID_VAX_20Jan2021_v2.pdf"
                    textDecoration="underline"
                  >
                    https://extranet.who.int/pqweb/sites/default/files/documents/Status_COVID_VAX_20Jan2021_v2.pdf
                  </StyledLink>
                </Text>
              </TinyListItem>
            </List>
          </Modal>
        </Margin>
      </Flex>
      <Overlay onClick={routeToHome} />
    </Relative>
  );
};

export default VaccineTypes;
