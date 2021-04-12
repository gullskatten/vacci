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
import { IColors } from "../../styled";

interface NavigationProps {
  href: string;
  title: string;
  icon: IconProp;
  fullWidth?: boolean;
  textColor?: keyof IColors;
  iconColor?: keyof IColors;
  background?: keyof IColors;
}

const NavigationLink: React.FC<NavigationProps> = ({
  href,
  title,
  icon,
  fullWidth,
  textColor = "onSurface",
  iconColor = "secondary",
  background = "surface",
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
      background={background}
      fullWidth={fullWidth}
      color={textColor}
    >
      <Padding all="m">
        <Flex fullWidth justify="space-between" align="center">
          <StyledRouterLink
            to={href}
            color={textColor}
            textDecoration="underline"
          >
            {title}
          </StyledRouterLink>
          <Text variant="body" element="span" color={iconColor}>
            <FontAwesomeIcon icon={icon} />
          </Text>
        </Flex>
      </Padding>
    </Background>
  );
};

export default NavigationLink;
