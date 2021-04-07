import loadIcons from "./utils/faLibLoader";
import Nav from "./components/Nav/Nav";
import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Concerns from "./components/Concern/Concerns";
import VaccineTypes from "./components/VaccineTypes/VaccineTypes";
import { Route, Switch } from "react-router-dom";
import StoryCovid from "./components/Story/StoryCovid";
import StoryVaccine from "./components/Story/StoryVaccine";

loadIcons();

const App: React.FC = () => {
  return (
    <>
      <Route path="/" component={Nav} />
      <Switch>
        <Route path="/concerns" exact component={Concerns} />
        <Route path="/" component={Home} />
      </Switch>
      <Route path="/vaccinetypes" exact component={VaccineTypes} />
      <Route path="/home/stories/sars-cov-2" exact component={StoryCovid} />
      <Route path="/home/stories/mrna-vaccine" exact component={StoryVaccine} />
      <Route path="/" component={Footer} />
    </>
  );
};

export default App;
