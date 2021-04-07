import loadIcons from "./utils/faLibLoader";
import Nav from "./components/Nav/Nav";
import React from "react";
import Footer from "./components/Footer/Footer";
import ColorPickerNavAction from "./components/ColorPicker/ColorPickerNavAction";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Concerns from "./components/Concern/Concerns";
import Stats from "./components/Statistics/Stats";

loadIcons();

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Route path="/" component={ColorPickerNavAction} />
      <Route path="/concerns" component={Concerns} />
      <Route path="/" exact component={Home} />
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default App;
