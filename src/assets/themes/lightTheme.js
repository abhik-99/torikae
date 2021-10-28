import React from 'react'
import { green, grey, orange } from '@mui/material/colors';

const lightTheme = {
    palette: {
        mode: 'light',
        primary: {
            main: grey[50],
            dark: grey[700]
        },
        secondary: orange,
        text: {
            primary: orange[500],
            secondary: green[500]
        }
    }

};

export default lightTheme
