import loadIcons from "./utils/faLibLoader";
import styled from "styled-components";
import Nav from "./components/Nav/Nav";
import React from "react";
import Content from "./components/Content/Content";

loadIcons();

function App() {
  return (
    <div>
      <Nav />
      <Content />
    </div>
  );
}

export default App;
