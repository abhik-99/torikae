/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

import logo from '../assets/img/logo.svg';

import { AppBar, Button, Hidden, Icon, Toolbar, Typography, ButtonBase, Grow, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
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
						<Icon css={css`text-align: center; height: 100%; width: 30%;`}>
							<embed src={logo} alt="Torikae" height={useMediaQuery(theme.breakpoints.down("sm")) ? "32px" : "56px"}/>
						</Icon>
						<Typography variant={useMediaQuery(theme.breakpoints.down("sm")) ? "h5" : "h2"} color={ theme.palette.mode === "light" ? "primary.dark" : "textPrimary"}>Torikae</Typography>
					</ButtonBase>
				</Grow>
				<Hidden smDown>
					<Stack direction="row" spacing={2}>
						<Button variant="contained" css={css`text-transform: none; padding: ${theme.spacing(1)} ${theme.spacing(3)}; border-radius: 22.9918px;`}>
							Cross-chain Swap
						</Button>
						<Button variant="contained" css={css`text-transform: none; padding: ${theme.spacing(1)} ${theme.spacing(3)}; border-radius: 22.9918px;`}>
							ERC-20 Swap
						</Button>
					</Stack>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

export default Header;
