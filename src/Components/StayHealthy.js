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

function StayHealthy(props) {
  const { classes, nobackground } = props;
  const backgroundColor = nobackground
    ? { backgroundColor: "inherit" }
    : { backgroundColor: "rgba(0,0,0,.7)" };
  return (
    <Paper style={{ ...backgroundColor }} elevation={nobackground ? 0 : 1}>
      <List>
        <ListItem>
          <ListItemText
            index={false}
            secondary="❝ Choose activities you enjoy. Many things count as exercise, including walking, gardening and dancing.
Make exercise a habit by setting aside the same time for it each day. Try going to the gym at lunchtime or taking a walk regularly after dinner.
Stay motivated by exercising with someone. ❝"
          />
        </ListItem>
      </List>
    </Paper>
  );
}

const themes = theme => ({});

export default withStyles(themes)(StayHealthy);
