import React from "react";
import styled from "styled-components";
import Flex from "../../styleguide/Flex";
import Background from "../../styleguide/Background";
import Text from "../../styleguide/Text";

const Nav: React.FC = () => {
  return (
    <Flex align="center" fullWidth>
      <Background color={"primary"}>
        <a href="/">
          <Text variant="title" element="h1">
            Vacci
          </Text>
        </a>
      </Background>
    </Flex>
  );
};

export default Nav;
