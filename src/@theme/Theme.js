import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blueGrey from "@material-ui/core/colors/blueGrey";

let theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
        },
        secondary: {
            light: blueGrey[300],
            main: blueGrey[500],
            dark: blueGrey[700]
        },
    },
});

theme = responsiveFontSizes(theme);

function Theme(props) {

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;