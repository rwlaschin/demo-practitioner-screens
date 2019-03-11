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

function Wholosophy(props) {
  const { classes, nobackground } = props;
  const backgroundColor = nobackground
    ? { backgroundColor: "inherit" }
    : { backgroundColor: "rgba(0,0,0,.7)" };
  return (
    <Paper style={{ ...backgroundColor }}>
      <List>
        <ListItem>
          <ListItemText
            index={false}
            secondary="❝ Pacific Naturopathic Solutions delivers high quality professional
health care within a patient centered environment. Wholosophy is a platform for
            discovering and building alternative healthcare realtionships. ❝"
          />
        </ListItem>
      </List>
    </Paper>
  );
}

const themes = theme => ({});

export default withStyles(themes)(Wholosophy);
