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

import DescribedAs from "../../Components/DescribedAs";

function SideBar(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item>
        <DescribedAs />
      </Grid>
    </Grid>
  );
}

const themes = theme => ({});

export default withStyles(themes)(SideBar);

// Described as (four crowd-sourced words)
