import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import {
  Grid,
  GridList,
  GridItem,
  Drawer,
  Paper,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import TopCard from "./TopCard";
import SideBar from "./SideBar";
import Main from "./Main";
import NavBar from "../../Components/NavBar";

function Example2(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <TopCard />
        <MuiThemeProvider theme={defaultTheme}>
          <Grid container wrap="nowrap" spacing={8}>
            <Grid item xs={4}>
              <SideBar />
            </Grid>
            <Grid item>
              <div style={{ paddingTop: "30px" }}>
                <Main />
              </div>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </MuiThemeProvider>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: { main: "#11005f" }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" }, // This is just green.A700 as hex.
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
      disabled: "#ffffff",
      hint: "#ffffff"
    }
  }
});

const defaultTheme = createMuiTheme();
const themes = theme => ({});

export default withStyles(themes)(Example2);
