/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, useTheme} from "@emotion/react";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 111,
    height: 55,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 1,
      margin: 5,
      transitionDuration: '500ms',
      '&.Mui-checked': {
        transform: 'translateX(60px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode ==='light' ? '#FFFFFF' : 'linear-gradient(#FFD939, #BEA438)',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? "#f5f5f5"
            : "#757575",
      },
      '.MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? "#F5E55F"
            : "#000000",
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 40,
      height: 40,
    },
    '& .MuiSwitch-track': {
      borderRadius: 33,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  })
);

const CustomSwitch = (props) => {
  const {leftText, rightText, toggleFunc} = props;
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography color={ theme.palette.mode === "light" ? "primary.dark" : "textPrimary"} variant="h6">{leftText}</Typography>
      <IOSSwitch defaultChecked onChange={toggleFunc} sx={{ m: 1 }}  inputProps={{ 'aria-label': 'IOS design' }} />
      <Typography color={ theme.palette.mode === "light" ? "primary.dark" : "textPrimary"} variant="h6">{rightText}</Typography>
    </Stack>
  )
}

export default CustomSwitch;

