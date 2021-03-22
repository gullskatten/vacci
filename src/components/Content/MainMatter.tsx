import styled from "styled-components";
import React from "react";
import Margin from "../../styleguide/Margin";
import Flex from "../../styleguide/Flex";

const MainMatterMaxWidth = styled.div`
  max-width: 1000px;
  margin-top: ${(props) => props.theme.spacing.m};
  @media all and (max-width: 1100px) {
    margin: ${(props) => props.theme.spacing.m};
  }
`;

interface MainMatterProps {
  children: React.ReactNode;
}

const MainMatter: React.FC<MainMatterProps> = ({ children }) => {
  return (
    <Flex fullWidth direction="column" align="center">
      <Margin top="m" bottom="m">
        <MainMatterMaxWidth>{children}</MainMatterMaxWidth>
      </Margin>
    </Flex>
  );
};

export default MainMatter;
