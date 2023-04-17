import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import Routess from '../src/routes/Routes';

import {theme} from './global'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routess/>
    </ThemeProvider>
    
  );
};

export default App;
