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
      <Background background={"secondaryVariant"} fullWidth>
        <Padding all="m">
          <Flex justify="space-between" align="center">
            <StyledLink href="/" fontStyle="normal" textDecoration="unset">
              <Text variant="title" element="h1">
                <Text element="span" gutterRight="s" variant="title">
                  <FontAwesomeIcon icon="virus" />
                </Text>{" "}
                Vacci
              </Text>
            </StyledLink>
            <Flex gap={10}>
              <Text bold>
                <StyledLink href="">Reading list</StyledLink>
              </Text>
              <Text bold>
                <StyledLink href="">Understanding mRNA</StyledLink>
              </Text>
              <Text bold>
                <StyledLink href="">Privacy policy</StyledLink>
              </Text>
            </Flex>
          </Flex>
        </Padding>
      </Background>
    </Flex>
  );
};

export default Nav;
