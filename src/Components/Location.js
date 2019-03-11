/*
Credentials (mba, md, nd..)
Practice name
Practitioner phone
A sample of a client review or some way to start to show them
Part of the ad showing above the line
*/

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
  ListItemText
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function Location(props) {
  const { classes, nobackground } = props;
  const backgroundColor = nobackground
    ? { backgroundColor: "inherit" }
    : { backgroundColor: "rgba(0,0,0,.7)" };
  return (
    <Paper
      style={{ ...backgroundColor, overflow: "hidden" }}
      elevation={nobackground ? 0 : 1}
    >
      <List>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText inset={false} primary="Phone" />
        </ListItem>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText inset={false} secondary="(555) 555 5555" />
        </ListItem>
        <ListItem>
          <ListItemText inset={false} primary="Office Location" />
        </ListItem>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText inset={false} secondary="1356 Main Street" />
        </ListItem>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText inset={false} secondary="Santa Clara, CA" />
        </ListItem>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText inset={false} secondary="95051" />
        </ListItem>
      </List>
    </Paper>
  );
}

const themes = theme => ({
  specalitiesListItems: {
    paddingTop: ".1rem",
    paddingBottom: ".1rem"
  }
});

export default withStyles(themes)(Location);
