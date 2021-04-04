import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import { RouteContext } from "../../context/RouteContext";
import Flex from "../../styleguide/Flex";
import { List, ListItem, TinyListItem } from "../../styleguide/List";
import Padding from "../../styleguide/Padding";
import StyledLink from "../../styleguide/StyledLink";
import StyledRouterLink from "../../styleguide/StyledRouterLink";
import Text from "../../styleguide/Text";

interface NavigationProps {
  href: string;
  title: string;
  icon: IconProp;
}

const NavigationLink: React.FC<NavigationProps> = ({ href, title, icon }) => {
  const history = useHistory();
  const { setRoute } = React.useContext(RouteContext);
  const onListItemClicked = () => {
    history.push(href);
    setRoute(href);
  };

  return (
    <ListItem clickable onClick={onListItemClicked}>
      <Flex fullWidth justify="space-between" align="center">
        <StyledRouterLink to={href} color="onSurface" textDecoration="unset">
          {title}
        </StyledRouterLink>
        <Text variant="body" element="span" color="secondary">
          <FontAwesomeIcon icon={icon} />
        </Text>
      </Flex>
    </ListItem>
  );
};

// TODO: Make Cards!!
const QuickMrnaInfoList: React.FC = () => {
  return (
    <List fullWidth>
      <ListItem>
        <Text variant="body" element="h3" color="onSurface" bold>
          Benefits of mRNA vaccines
        </Text>
      </ListItem>
      <ListItem>
        <Padding left="m">
          <List listStyle="decimal">
            <TinyListItem>
              <Text variant="body" element="p" color="onSurface">
                No risk for insertional mutagenesis (alterations in the DNA)
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text variant="body" element="p" color="onSurface">
                No risk for infection
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text variant="body" element="p" color="onSurface">
                Production may be rapid, simple, inexpensive and scalable
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text variant="body" element="p" color="onSurface">
                The manufacturing process may be standardized. This makes it
                possible to quickly develop vaccines against emerging infectious
                diseases
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text variant="body" element="p" color="onSurface">
                mRNA can be modified to improve its stability and translation
                (protein-production) efficiency
              </Text>
            </TinyListItem>
          </List>
        </Padding>
      </ListItem>
      <ListItem>
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
      </ListItem>
      <NavigationLink
        icon={"arrow-right"}
        title="List of Vaccine Types"
        href="/vaccinetypes"
      />
    </List>
  );
};

export default QuickMrnaInfoList;
