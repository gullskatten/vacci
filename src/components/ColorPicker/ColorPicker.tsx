import React from "react";
import { IColors } from "../../../styled";
import { ThemeWrapperContext } from "../../context/ThemeWrapperContext";
import Card from "../../styleguide/Card";
import Flex from "../../styleguide/Flex";
import Input from "../../styleguide/Input";
import Margin from "../../styleguide/Margin";
import Text from "../../styleguide/Text";
import styled from "styled-components";
import Padding from "../../styleguide/Padding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExportButton = styled.button`
  padding: 0.5rem;
  margin: 0;
  color: #4f64fc;
  font-weight: bold;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #eeeeee;
  border-radius: 5px;
`;

const ResetButton = styled.button`
  border: 0;
  padding: 0.5rem;
  margin: 0;
  color: ${(props) => props.theme.colors.error};
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
`;

const ColorPickerBackground = styled.div`
  background-color: #ffffff;
  padding: 0.5rem;
`;

const InputLabel = styled.label`
  font-weight: bold;
`;

interface Props {}
interface InputProps {
  id: string;
  label: string;
  color: keyof IColors;
  inputValue: string;
  onInputChange: (value: string) => void;
  reset: () => void;
}

const ColorInput: React.FC<InputProps> = (props) => {
  return (
    <Padding bottom="s" top="s">
      <InputLabel>{props.label}</InputLabel>
      <Flex align="center">
        <Input
          id={props.id}
          value={props.inputValue}
          borderColor={props.color}
          onChange={(e) => props.onInputChange(e.target.value)}
        ></Input>
        <Margin left="s">
          <ResetButton onClick={() => props.reset()}>Reset</ResetButton>
        </Margin>
      </Flex>
    </Padding>
  );
};

const ColorPicker: React.FC<Props> = () => {
  const {
    background,
    setBackground,
    resetBackground,
    primary,
    setPrimary,
    resetPrimary,
    secondary,
    setSecondary,
    resetSecondary,
    tertiary,
    setTertiary,
    resetTertiary,
    onPrimary,
    setOnPrimary,
    resetOnPrimary,
    onSecondary,
    setOnSecondary,
    resetOnSecondary,
    onTertiary,
    setOnTertiary,
    resetOnTertiary,
    onBackground,
    setOnBackground,
    resetOnBackground,
    onBackgroundContrast,
    setOnBackgroundContrast,
    resetOnBackgroundContrast,
    copyToClipboard,
  } = React.useContext(ThemeWrapperContext);

  return (
    <ColorPickerBackground>
      <Padding>
        <ExportButton onClick={copyToClipboard}>
          Copy theme to clipboard
        </ExportButton>
        <ColorInput
          onInputChange={(value) => setBackground(value)}
          color="background"
          id="background"
          inputValue={background}
          label="Background"
          reset={() => resetBackground()}
        />
        <ColorInput
          onInputChange={(value) => setPrimary(value)}
          color="primary"
          id="primary"
          inputValue={primary}
          label="Primary"
          reset={() => resetPrimary()}
        />
        <ColorInput
          onInputChange={(value) => setSecondary(value)}
          color="secondary"
          id="secondary"
          inputValue={secondary}
          label="Secondary"
          reset={() => resetSecondary()}
        />
        <ColorInput
          onInputChange={(value) => setTertiary(value)}
          color="tertiary"
          id="tertiary"
          inputValue={tertiary}
          label="Tertiary"
          reset={() => resetTertiary()}
        />
        <ColorInput
          onInputChange={(value) => setOnBackground(value)}
          color="onBackground"
          id="onBackground"
          inputValue={onBackground}
          label="Text On Background"
          reset={() => resetOnBackground()}
        />
        <ColorInput
          onInputChange={(value) => setOnBackgroundContrast(value)}
          color="onBackgroundContrast"
          id="onBackgroundContrast"
          inputValue={onBackgroundContrast}
          label="Variant Text On Background"
          reset={() => resetOnBackgroundContrast()}
        />
        <ColorInput
          onInputChange={(value) => setOnPrimary(value)}
          color="onPrimary"
          id="onPrimary"
          inputValue={onPrimary}
          label="Text On Primary"
          reset={() => resetOnPrimary()}
        />
        <ColorInput
          onInputChange={(value) => setOnSecondary(value)}
          color="onSecondary"
          id="onSecondary"
          inputValue={onSecondary}
          label="Text On Secondary"
          reset={() => resetOnSecondary()}
        />
        <ColorInput
          onInputChange={(value) => setOnTertiary(value)}
          color="onTertiary"
          id="onTertiary"
          inputValue={onTertiary}
          label="Text On Tertiary"
          reset={() => resetOnTertiary()}
        />
      </Padding>
    </ColorPickerBackground>
  );
};

export default ColorPicker;
