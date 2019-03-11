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
import Abilities from "../../Components/Abilities";
import Wholosophy from "../../Components/Wholosophy";
import Location from "../../Components/Location";
import StayHealthy from "../../Components/StayHealthy";
import Give from "../../Components/Give";

function SideBar(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={4}>
        <List>
          <ListItem>
            <Abilities nobackground={true} />
          </ListItem>
          <ListItem>
            <DescribedAs nobackground={true} />
          </ListItem>
          <ListItem>
            <Wholosophy nobackground={true} />
          </ListItem>
          <ListItem>
            <Location nobackground={true} />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={4}>
        <List>
          <ListItem />
          <ListItem>
            <Give nobackground={true} />
          </ListItem>
          <ListItem>
            <StayHealthy nobackground={true} />
          </ListItem>
          <ListItem>
            <img src="/images/office_space_001.jpeg" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

const themes = theme => ({});

export default withStyles(themes)(SideBar);

// Described as (four crowd-sourced words)
