import './App.css';
import MainPage from './pages/main/main';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <MantineProvider>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </MantineProvider>
    </RecoilRoot>
  );
}

export default App;
