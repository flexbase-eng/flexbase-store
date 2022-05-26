import './App.css';
import MainPage from './pages/main/main';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { default as PayWithFlexbase } from '@flexbase-eng/pay-with-flexbase'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'pay-with-flexbase': PayWithFlexbaseProps
        }
    }
}

interface PayWithFlexbaseProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    apikey: string,
    amount: string,
    callback: string,
    session: string,
}

customElements.get('pay-with-flexbase') || customElements.define('pay-with-flexbase', PayWithFlexbase);

function App() {
  return (
    <RecoilRoot>
      <MantineProvider theme={{colors:{'flexbase-orange':["#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745","#ff5745"]}}}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <MainPage />
        </BrowserRouter>
      </MantineProvider>
    </RecoilRoot>
  );
}

export default App;
