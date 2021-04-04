import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Padding from "./Padding";

const ModalWrapper = styled.div`
  z-index: 6;
  position: fixed;
  top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  max-height: 50vh;
  overflow-y: auto;
`;

const MaxWidthWrapper = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Modal: React.FC = ({ children }) => {
  return (
    <ModalWrapper>
      <MaxWidthWrapper>
        <Card>
          <Padding all="m">{children}</Padding>
        </Card>
      </MaxWidthWrapper>
    </ModalWrapper>
  );
};

export default Modal;
