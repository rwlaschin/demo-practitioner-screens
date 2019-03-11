import React from "react";

import { Paper, List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function DescribedAs(props) {
  const { classes } = props;
  return (
    <Paper elevation={0}>
      <List>
        <ListItem className={classes.specalitiesListItems}>
          <ListItemText inset={false} primary="Described As" />
        </ListItem>
        <List>
          <ListItem
            className={[classes.specalitiesListItems, classes.nested].join(" ")}
          >
            <ListItemText inset={false} primary="Patient" />
          </ListItem>
          <ListItem
            className={[classes.specalitiesListItems, classes.nested].join(" ")}
          >
            <ListItemText inset={false} primary="Pleasant" />
          </ListItem>
          <ListItem
            className={[classes.specalitiesListItems, classes.nested].join(" ")}
          >
            <ListItemText inset={false} primary="Caring" />
          </ListItem>
          <ListItem
            className={[classes.specalitiesListItems, classes.nested].join(" ")}
          >
            <ListItemText inset={false} primary="Informed" />
          </ListItem>
        </List>
      </List>
    </Paper>
  );
}

const themes = theme => ({
  specalitiesListItems: {
    paddingTop: ".1rem",
    paddingBottom: ".1rem"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

export default withStyles(themes)(DescribedAs);

// Described as (four crowd-sourced words)
