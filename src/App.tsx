import './App.css';
import MainPage from './pages/main/main';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
