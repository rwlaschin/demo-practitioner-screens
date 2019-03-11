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

function Give(props) {
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
            secondary="❝ Children need role models and people who care about their lives and behavior. Whether you read stories to elementary school students, monitor outdoor activities, chaperone field trips, or spend a Saturday beautifying the school grounds, your efforts will be recognized and appreciated. Moreover, you can make an investment that will pay dividends in the future. ❝"
          />
        </ListItem>
      </List>
    </Paper>
  );
}

const themes = theme => ({});

export default withStyles(themes)(Give);
