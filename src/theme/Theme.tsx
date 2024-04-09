import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import '../App.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4b2926',
        },
    },
    typography: {
        fontFamily: "DM Sans, sans-serif",
    },
});

type ThemeProps = {
    children: React.ReactNode;
};

export const Theme = ({children}: ThemeProps) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};