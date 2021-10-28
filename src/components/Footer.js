/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import CustomSwitch from '../ui/CustomSwitch';
import { Toolbar } from '@mui/material';


const Footer = (props) => {
	const {toggleMode} = props
	const theme = useTheme();
	return (
		<footer css={css` width: 100%; padding: 0 ${theme.spacing(4)};`}>

			<Box sx={{
				display: 'flex',
				justifyContent: 'flex-end'
			}}>
				<CustomSwitch toggleFunc={toggleMode} leftText="Light" rightText="Dark"/>
			</Box>
			<Toolbar />
		</footer>
	)
}

export default Footer;
