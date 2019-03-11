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
    <Paper
      style={{ overflowX: "hidden", ...backgroundColor }}
      elevation={nobackground ? 0 : 1}
    >
      <List>
        <ListItem>
          <ListItemText inset={false} primary="Acupuncture" />
        </ListItem>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText
            inset={false}
            textDense={true}
            secondary="Allergy/Immunology"
            title="Specific allergy points are targeted to help alleviate allergies and their concurrent symptoms."
          />
        </ListItem>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText
            inset={false}
            secondary="Asian Bodywork Therapy"
            title="Involves a variety of manual body treatments, such as pressure, motion, cold and hot application, and stretching; popular forms include shiatsu, acupressure, amma, chi nei tsang, jin shin do, nuad bo rarn, and tuina."
          />
        </ListItem>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText
            inset={false}
            secondary="Mental Health"
            title="Acupuncture can be combined with herbs and exercise to combat mental disorders such as depression and bipolar disorder."
          />
        </ListItem>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText
            inset={false}
            secondary="Neurology"
            title="Acupuncture can be used to treat a host of neurological ailments, such as headache, neck pain, back pain, drug addiction, stroke rehabilitation, Parkinson's disease and multiple sclerosis."
          />
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

export default withStyles(themes)(Wholosophy);
