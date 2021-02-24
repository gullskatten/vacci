import loadIcons from "./utils/faLibLoader";
import styled from "styled-components";
import Nav from "./components/Nav/Nav";
import React from "react";
import Content from "./components/Content/Content";
import Margin from "./styleguide/Margin";

loadIcons();

function App() {
  return (
    <div>
      <Nav />
      <Margin all="s">
        <Content />
      </Margin>
    </div>
  );
}

export default App;
