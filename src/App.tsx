import loadIcons from './utils/faLibLoader';
import styled from 'styled-components';
import Nav from './components/Nav/Nav';
import React from 'react';

loadIcons();


function App() {
  return (
    <div>
      <Nav />

    </div>
  );
}

export default App;
