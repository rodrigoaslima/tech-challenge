import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import Routess from '../src/routes/Routes';

import {theme} from './global'
import { ClientProvider } from './context/ClientContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ClientProvider>
        <CssBaseline/>
        <Routess/>
      </ClientProvider>
    </ThemeProvider>
    
  );
};

export default App;
