import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import Routess from '../src/routes/Routes';

import {theme} from './global'
import { ClientProvider } from './context/ClientContext';
import { MarketProvider } from './context/MarketContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ClientProvider>
        <MarketProvider>
          <CssBaseline/>
          <Routess/>
        </MarketProvider>
      </ClientProvider>
    </ThemeProvider>
    
  );
};

export default App;
