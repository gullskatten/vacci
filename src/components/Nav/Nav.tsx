import React from "react";
import styled from "styled-components";
import Flex from "../../styleguide/Flex";
import Background from "../../styleguide/Background";
import Text from "../../styleguide/Text";
import StyledLink from "../../styleguide/StyledLink";
import Padding from "../../styleguide/Padding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColorPicker from "../ColorPicker/ColorPickerNavAction";
import ColorPickerNavAction from "../ColorPicker/ColorPickerNavAction";

const Nav: React.FC = () => {
  return (
    <Flex align="center" fullWidth>
      <Background background={"background"} fullWidth>
        <Padding all="m">
          <Flex justify="space-between" align="center">
            <StyledLink href="/" fontStyle="normal" textDecoration="unset">
              <Text variant="title" element="h1" color="onBackground">
                <Text
                  element="span"
                  gutterRight="s"
                  variant="title"
                  color="onBackground"
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
  );
};

export default Nav;
