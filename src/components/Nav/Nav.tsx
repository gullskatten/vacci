import React from "react";
import styled from "styled-components";
import Flex from "../../styleguide/Flex";
import Background from "../../styleguide/Background";
import Text from "../../styleguide/Text";
import StyledLink from "../../styleguide/StyledLink";
import Padding from "../../styleguide/Padding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav: React.FC = () => {
  return (
    <Flex align="center" fullWidth>
      <Background background={"primary"} fullWidth>
        <Padding all="m">
          <StyledLink href="/" fontStyle="normal" textDecoration="unset">
            <Text variant="title" element="h1">
              <Text element="span" gutterRight="s" variant="title">
                <FontAwesomeIcon icon="virus" />
              </Text>{" "}
              Vacci
            </Text>
          </StyledLink>
        </Padding>
      </Background>
    </Flex>
  );
};

export default Nav;
