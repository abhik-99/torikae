/** @jsxImportSource @emotion/react */
import { useState} from 'react';
import { Container, Button, Stack, Grid, ButtonBase, Select, MenuItem, TextField, Grow, Hidden } from '@mui/material';
import {css} from "@emotion/react";
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Header from './components/Header';
import Footer from './components/Footer';

import bg_dark_desktop from './assets/img/bg_with_circles.png';
// import bg_dark_mobile from './assets/img/bg_dark_mobile.jpeg';
// import bg_light from './assets/img/bg_light_desktop.jpeg';
import { createTheme } from '@mui/material/styles';
import lightTheme from './assets/themes/lightTheme';
import darkTheme from './assets/themes/darkTheme';

import cartoon from './assets/img/cartoon.svg';
import { Box } from '@mui/system';

function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme(mode === 'light' ? lightTheme : darkTheme);
  console.log(useMediaQuery(theme.breakpoints.down("xs")), useMediaQuery(theme.breakpoints.down("sm")), useMediaQuery(theme.breakpoints.down("md")), useMediaQuery(theme.breakpoints.down("lg")), useMediaQuery(theme.breakpoints.down("xl")));
  // const bg_dark = useMediaQuery(theme.breakpoints.down("sm")) ? bg_dark_mobile : bg_dark_desktop;
  console.log("THEME", theme);

  // background-image: url(${theme.palette.mode === 'light' ? bg_light : bg_dark});

  return (
    <ThemeProvider theme={theme}>
      <div css={css`
      height: 100vh;
      background-image: url(${bg_dark_desktop});
      background-size: cover;
      background-repeat: no-repeat;
      `}>
        <Header />

        <Container css={css`
        min-width: 100%;
        margin: ${theme.spacing(20)} 0;
        padding: 0 ${theme.spacing(3)};
        `}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} lg={4} align="center">
              <Stack spacing={2}
              justifyContent="center"
              alignItems="center">
                <div css={css`
                  width: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "195px" : "300px"};
                  height: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "65px" : "100px"};
                  background: ${theme.palette.mode === "dark" ? 'linear-gradient(275.94deg, rgba(101, 100, 100, 0.4) 0%, rgba(0, 0, 0, 0.4) 98.45%)' : '#ffffff'};
                  backdrop-filter: blur(30px);
                  /* Note: backdrop-filter has minimal browser support */
                  border-radius: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "19.5px" : "30px"};
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: ${theme.spacing(2)}
                `}>
                  <Select
                  variant="standard"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"

                  label="Age"
                  fullWidth
                  MenuProps={{
                    sx: {
                      "&& .MuiPaper-root": {
                        background: `${theme.palette.mode === "dark" ? 'linear-gradient(275.94deg, rgba(101, 100, 100, 0.4) 0%, rgba(0, 0, 0, 0.4) 98.45%)' : '#ffffff'}`,
                        backdropFilter: "blur(30px)",
                        borderRadius: "30px"
                      },
                      "&:hover": {
                        background: 'primary'
                      }
                    }
                  }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </div>
                <div css={css`
                  width: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "195px" : "300px"};
                  height: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "65px" : "100px"};
                  background: ${theme.palette.mode === "dark" ? 'linear-gradient(275.94deg, rgba(101, 100, 100, 0.4) 0%, rgba(0, 0, 0, 0.4) 98.45%)' : '#ffffff'};
                  backdrop-filter: blur(30px);
                  /* Note: backdrop-filter has minimal browser support */
                  border-radius: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "19.5px" : "30px"};
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: ${theme.spacing(2)}
                `}>
                  <TextField variant="standard" placeholder="amount" fullWidth/>
                </div>
              </Stack>
            </Grid>

            <Grid item xs={12} md={8} lg={2} align="center">
              <Stack spacing={2}>
                <ButtonBase>
                  <Grow in={true} timeout={800}>
                    <img src={cartoon} alt="yoyo!" height={ useMediaQuery(theme.breakpoints.down("md")) ? "80px" : "240px"}/>
                  </Grow>
                </ButtonBase>
                <Box>
                  <Hidden mdDown>
                    <Button color="primary" variant="contained" css={css`text-tranform: none; border-radius: 22.9918px;`}>Exchange</Button>
                  </Hidden>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={8} lg={4} align="center">
              <Stack spacing={2}
              justifyContent="center"
              alignItems="center">
                <div css={css`
                  width: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "195px" : "300px"};
                  height: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "65px" : "100px"};
                  background: ${theme.palette.mode === "dark" ? 'linear-gradient(275.94deg, rgba(101, 100, 100, 0.4) 0%, rgba(0, 0, 0, 0.4) 98.45%)' : '#ffffff'};
                  backdrop-filter: blur(30px);
                  /* Note: backdrop-filter has minimal browser support */
                  border-radius: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "19.5px" : "30px"};
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: ${theme.spacing(2)}
                  `}>
                  <Select
                  variant="standard"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"

                  label="Age"
                  fullWidth
                  MenuProps={{
                    sx: {
                      "&& .MuiPaper-root": {
                        background: `${theme.palette.mode === "dark" ? 'linear-gradient(275.94deg, rgba(101, 100, 100, 0.4) 0%, rgba(0, 0, 0, 0.4) 98.45%)' : '#ffffff'}`,
                        backdropFilter: "blur(30px)",
                        borderRadius: "30px"
                      }
                    }
                  }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </div>
                <div css={css`
                  width: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "195px" : "300px"};
                  height: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "65px" : "100px"};
                  background: ${theme.palette.mode === "dark" ? 'linear-gradient(275.94deg, rgba(101, 100, 100, 0.4) 0%, rgba(0, 0, 0, 0.4) 98.45%)' : '#ffffff'};
                  backdrop-filter: blur(30px);
                  /* Note: backdrop-filter has minimal browser support */
                  border-radius: ${ useMediaQuery(theme.breakpoints.down("sm")) ? "19.5px" : "30px"};
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: ${theme.spacing(2)}
                `}>
                  <TextField variant="standard" placeholder="amount" fullWidth/>
                </div>
              </Stack>
            </Grid>
            <Grid item xs={12} align="center">
              <Hidden mdUp>
                <Button color="primary" variant="contained" css={css`text-tranform: none; border-radius: 22.9918px;`}>Exchange</Button>
              </Hidden>
            </Grid>
          </Grid>
        </Container>

        <Footer toggleMode={() => mode === "dark" ? setMode("light") : setMode("dark")} />
      </div>
    </ThemeProvider>
  );
}

export default App;
