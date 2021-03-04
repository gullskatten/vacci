import loadIcons from "./utils/faLibLoader";
import styled from "styled-components";
import Nav from "./components/Nav/Nav";
import React from "react";
import Content from "./components/Content/Content";
import Margin from "./styleguide/Margin";
import ColorPickerNavAction from "./components/ColorPicker/ColorPickerNavAction";

loadIcons();

function App() {
  return (
    <div>
      <Nav />
      <Margin all="s">
        <Content />
        <ColorPickerNavAction />
      </Margin>
    </div>
  );
}

export default App;
