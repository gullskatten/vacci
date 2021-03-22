import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Flex from "../../styleguide/Flex";
import { List, ListItem } from "../../styleguide/List";
import Padding from "../../styleguide/Padding";
import StyledLink from "../../styleguide/StyledLink";
import Text from "../../styleguide/Text";

interface NavigationProps {
  href: string;
  title: string;
  icon: IconProp;
}

const NavigationLink: React.FC<NavigationProps> = ({ href, title, icon }) => {
  return (
    <ListItem clickable>
      <Flex fullWidth justify="space-between" align="center">
        <StyledLink href={href} color="onSurface" textDecoration="unset">
          {title}
        </StyledLink>
        <Text variant="body" element="span" color="secondary">
          <FontAwesomeIcon icon={icon} />
        </Text>
      </Flex>
    </ListItem>
  );
};

const QuickNavigationList: React.FC = () => {
  return (
    <List fullWidth>
      <ListItem>
        <Text variant="body" element="h3" color="onSurface" bold>
          Quick Navigation
        </Text>
      </ListItem>

      <NavigationLink
        icon={["far", "chart-bar"]}
        title="Statistics"
        href="/statistics "
      />
      <NavigationLink
        icon={["far", "frown-open"]}
        title="Vaccine Concerns"
        href="/concerns"
      />
      <NavigationLink
        icon={["far", "map"]}
        title="Suggested Reading"
        href="/reading"
      />
    </List>
  );
};

export default QuickNavigationList;
