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
  overflow: auto;
  height: 100%;
`;

const MaxWidthWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  height: 100%;
`;

const ModalCard = styled(Card)`
  max-height: 85vh;
  overflow: auto;
`;

const Modal: React.FC = ({ children }) => {
  return (
    <ModalWrapper>
      <MaxWidthWrapper>
        <ModalCard>
          <Padding all="l">{children}</Padding>
        </ModalCard>
      </MaxWidthWrapper>
    </ModalWrapper>
  );
};

export default Modal;
