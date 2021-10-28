/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, useTheme} from "@emotion/react";

import logo from '../assets/img/logo.svg';

import { Box } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppBar, Button, IconButton, Paper, Icon, Toolbar, Typography, ButtonBase, Grow } from '@mui/material';

const Header = () => {

  const theme = useTheme();
	return (
		<AppBar position="static" css={css`background: none;`} elevation={0}>
			<Toolbar />
			<Toolbar css={css`
			display: flex;
			justify-content: space-between;
			align-items: center
			`}>
				<Grow in={true} timeout={400}>
					<ButtonBase>
						<Icon css={css`text-align: center; height: 100%; width: 25%;`}>
							<embed src={logo} alt="Torikae" height="50px"/>
						</Icon>
						<Typography variant="h2" color={ theme.palette.mode === "light" ? "primary.dark" : "textPrimary"}>Torikae</Typography>
					</ButtonBase>
				</Grow>
				<Box sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Button variant="contained" css={css`text-transform: none; padding: ${theme.spacing(1)} ${theme.spacing(3)}; border-radius: 22.9918px;`}>Connect to <br/> Wallet</Button>
					<IconButton color="primary">
						<MoreVertIcon />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header;
