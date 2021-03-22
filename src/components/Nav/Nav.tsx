import React from "react";
import styled from "styled-components";
import Flex from "../../styleguide/Flex";
import Background from "../../styleguide/Background";
import Text from "../../styleguide/Text";
import StyledLink from "../../styleguide/StyledLink";
import Padding from "../../styleguide/Padding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  will-change: transform;
  z-index: 1;
  box-shadow: 0px 1px 12px 0px rgb(0 0 0 / 20%);
  width: 100%;
`;

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <Flex align="center" fullWidth>
        <Background background={"surface"} fullWidth>
          <Padding all="m">
            <Flex justify="space-between" align="center">
              <StyledLink href="/" fontStyle="normal" textDecoration="unset">
                <Text variant="title" element="h1" color="onBackground">
                  <Text
                    element="span"
                    gutterRight="s"
                    variant="title"
                    color="secondary"
                  >
                    <FontAwesomeIcon icon="virus" />
                  </Text>{" "}
                  Vacci
                </Text>
              </StyledLink>
            </Flex>
          </Padding>
        </Background>
      </Flex>
    </NavWrapper>
  );
};

export default Nav;
