import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import { RouteContext } from "../context/RouteContext";
import Background from "./Background";
import Flex from "./Flex";
import Padding from "./Padding";
import StyledRouterLink from "./StyledRouterLink";
import Text from "./Text";

interface NavigationProps {
  href: string;
  title: string;
  icon: IconProp;
  fullWidth?: boolean;
}

const NavigationLink: React.FC<NavigationProps> = ({
  href,
  title,
  icon,
  fullWidth,
}) => {
  const history = useHistory();
  const { setRoute } = React.useContext(RouteContext);
  const onListItemClicked = () => {
    history.push(href);
    setRoute(href);
  };

  return (
    <Background
      clickable
      onClick={onListItemClicked}
      background="surface"
      fullWidth={fullWidth}
    >
      <Padding all="m">
        <Flex fullWidth justify="space-between" align="center">
          <StyledRouterLink
            to={href}
            color="onSurface"
            textDecoration="underline"
          >
            {title}
          </StyledRouterLink>
          <Text variant="body" element="span" color="secondary">
            <FontAwesomeIcon icon={icon} />
          </Text>
        </Flex>
      </Padding>
    </Background>
  );
};

export default NavigationLink;
