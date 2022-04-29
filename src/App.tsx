import './App.css';
import MainPage from './pages/main/main';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <MantineProvider theme={{colors:{'flexbase-orange':["#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745"]}}}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </MantineProvider>
    </RecoilRoot>
  );
}

export default App;
