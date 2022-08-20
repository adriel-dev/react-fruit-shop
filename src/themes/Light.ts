import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#89BD23',
            dark: '#82B421',
            light: '#96CC2B',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#333758',
            dark: '#292D47',
            light: '#3A3E63',
            contrastText: '#FFF'
        },
        background: {
            default: '#F7F6F3',
            paper: '#FFF',
        }
    }
});