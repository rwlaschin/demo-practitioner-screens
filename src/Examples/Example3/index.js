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

function Example3(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Grid container wrap="nowrap" spacing={32} alignItems={"space-between"}>
          <Grid item xs={8}>
            <TopCard />
            <MuiThemeProvider theme={defaultTheme}>
              <SideBar />
            </MuiThemeProvider>
          </Grid>
          <Grid item xs={8}>
            <MuiThemeProvider theme={defaultTheme}>
              <div style={{ paddingTop: "30px" }}>
                <Main />
              </div>
            </MuiThemeProvider>
          </Grid>
        </Grid>
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

export default withStyles(themes)(Example3);
