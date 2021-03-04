import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Text from "../../styleguide/Text";
import ColorPicker from "./ColorPicker";

interface Props {}

const ColorPickerWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 999;
`;

const ColorPickerButton = styled.button`
  border: 0;
  padding: 0.5rem;
  margin: 0;
  color: ${(props) => props.theme.colors.onPrimary};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  left: -250px;
  bottom: 0px;
  height: 300px;
  overflow-y: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const ColorPickerNavAction: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ColorPickerWrapper>
      <ColorPickerButton onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon="palette" />
      </ColorPickerButton>
      {isOpen && (
        <AbsoluteWrapper>
          <ColorPicker />
        </AbsoluteWrapper>
      )}
    </ColorPickerWrapper>
  );
};

export default ColorPickerNavAction;
