import loadIcons from './utils/faLibLoader';
import styled from 'styled-components';
import Routes from './routes/Routes';


loadIcons();

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #666;
`;

function App() {
  return (
    <AppContainer>
       <Routes />
    </AppContainer>
  );
}

export default App;
