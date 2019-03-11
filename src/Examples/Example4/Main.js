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
import Article from "../../Components/Article";

function Main(props) {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Article />
      </Grid>
    </Grid>
  );
}

const themes = theme => ({});

export default withStyles(themes)(Main);
