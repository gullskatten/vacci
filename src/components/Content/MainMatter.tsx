import styled from "styled-components";
import React from "react";
import Margin from "../../styleguide/Margin";
import Flex from "../../styleguide/Flex";

const MainMatterMaxWidth = styled.div`
  max-width: 1400px;
`;

interface MainMatterProps {
  children: React.ReactNode;
}

const MainMatter: React.FC<MainMatterProps> = ({ children }) => {
  return (
    <Flex fullWidth direction="column" align="center">
      <Margin bottom="m">
        <MainMatterMaxWidth>{children}</MainMatterMaxWidth>
      </Margin>
    </Flex>
  );
};

export default MainMatter;
