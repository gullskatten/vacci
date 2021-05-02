import React from "react";
import styled from "styled-components";
import Flex from "../../styleguide/Flex";
import Background from "../../styleguide/Background";
import Text from "../../styleguide/Text";
import StyledLink from "../../styleguide/StyledLink";
import Padding from "../../styleguide/Padding";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Margin from "../../styleguide/Margin";
import HideIf from "../../styleguide/HideIf";
import StyledImage from "../../styleguide/StyledImage";
import logo from "../../assets/images/nav_logo.png";
const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  will-change: transform;
  z-index: 1;
  box-shadow: 0px 1px 12px 0px rgb(0 0 0 / 20%);
  width: 100%;
  background-color: ${(props) => props.theme.colors.surface};
`;

const MaxWidthWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
`;

interface NavigationLinkProps {
  navItem: NavigationLink;
  isSmallScreen: boolean;
}

interface NavigationLink {
  href: string;
  title: string;
  icon: IconProp;
}

const navigationListItems: NavigationLink[] = [
  {
    href: "/concerns",
    title: "Concerns",
    icon: ["far", "frown-open"],
  },
  {
    href: "/statistics",
    title: "Statistics",
    icon: ["far", "chart-bar"],
  },
];

const NavLink: React.FC<NavigationLinkProps> = ({ navItem, isSmallScreen }) => {
  return (
    <Margin all="s">
      <Text color="onSurface" variant={isSmallScreen ? "pico" : "body"}>
        <StyledLink
          href={navItem.href}
          color="onSurface"
          textDecoration="underline"
        >
          {navItem.title}
        </StyledLink>
      </Text>
    </Margin>
  );
};

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <Flex justify="center" fullWidth>
        <MaxWidthWrapper>
          <Background background={"surface"} fullWidth>
            <Padding top="s" bottom="s" fullWidth>
              <Flex justify="space-between" align="center" fullWidth>
                <Flex align="center">
                  <HideIf screenSize="l">
                    <Margin left="s" />
                  </HideIf>
                  <StyledImage src={logo} height="45px" alt="Vacci Logo" />
                  <Text
                    variant="title"
                    element="h1"
                    color="onBackground"
                    gutterLeft="m"
                  >
                    <StyledLink
                      href="/"
                      fontStyle="normal"
                      textDecoration="unset"
                    >
                      Vacci.no
                    </StyledLink>
                  </Text>
                </Flex>

                <HideIf screenSize="s">
                  <Flex align="center">
                    {navigationListItems.map((item: NavigationLink) => (
                      <NavLink
                        navItem={item}
                        key={item.href}
                        isSmallScreen={false}
                      />
                    ))}
                  </Flex>
                </HideIf>
                <HideIf screenSize="m">
                  <Flex align="center">
                    {navigationListItems.map((item: NavigationLink) => (
                      <NavLink navItem={item} key={item.href} isSmallScreen />
                    ))}
                  </Flex>
                </HideIf>
              </Flex>
            </Padding>
          </Background>
        </MaxWidthWrapper>
      </Flex>
    </NavWrapper>
  );
};

export default Nav;
