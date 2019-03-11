import React from "react";
import ReactDOM from "react-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import {
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Trademark from "./Trademark";
import Search from "./Search";

function NavBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar style={{ padding: 0, margin: 0 }}>
          <div
            style={{
              transform: "scale(.2,.2)",
              position: "relative",
              top: "-1.5em",
              marginRight: "12rem"
            }}
          >
            <Trademark />
          </div>
          <div>
            <Search />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const themes = theme => ({
  root: {
    flexGrow: 1
  }
});

export default withStyles(themes)(NavBar);
