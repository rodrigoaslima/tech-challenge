import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    overrides:{
        MuiCssBaseLine:{
            "@global":{
                body:{
                    margin: 0,
                    background: '#181226',
                    fontFamily: [
                        '-apple-system',
                        'BlinkMacSystemFont',
                        'Segoe UI', 
                        'Roboto', 
                        'Oxygen',
                        'Ubuntu', 
                        'Cantarell', 
                        'Fira Sans', 
                        'Droid Sans', 
                        'Helvetica Neue',
                        'sans-serif'
                    ].join(','),
                    webkitFontSmoothing: 'antialiased',
                    mozOsxFontSmoothing: 'grayscale',
                },
                code:{
                    fontFamily:[
                        'source-code-pro', 
                        'Menlo', 
                        'Monaco', 
                        'Consolas', 
                        'Courier New',
                        'monospace'
                    ].join(',')
                },
                p:{
                    margin: 0,
                    padding: 0,
                }, 

            }
        }
    }
})