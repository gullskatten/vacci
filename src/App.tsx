import loadIcons from './utils/faLibLoader';
import styled from 'styled-components';


loadIcons();

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #666;
`;

function App() {
  return (
    <AppContainer>
    </AppContainer>
  );
}

export default App;
