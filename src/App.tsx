import loadIcons from "./utils/faLibLoader";
import Nav from "./components/Nav/Nav";
import React from "react";
import Content from "./components/Content/Content";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import ColorPickerNavAction from "./components/ColorPicker/ColorPickerNavAction";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Scepticism from "./components/Page/Scepticism";

loadIcons();

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Route path="/" component={ColorPickerNavAction} />
      <Route path="/" exact component={Content} />
      <Route path="/" component={Disclaimer} />
    </Router>
  );
};

export default App;
