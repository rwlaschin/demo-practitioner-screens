import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { Paper, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function Wholosophy(props) {
  const { classes } = props;
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-around"
      spacing={16}
      wrap={"nowrap"}
    >
      <Grid item>
        <Paper>
          <Link to="/example1">
            <Typography variant={"h3"}>1</Typography>
          </Link>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <Link to="/example2">
            <Typography variant={"h3"}>2</Typography>
          </Link>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <Link to="/example3">
            <Typography variant={"h3"}>3</Typography>
          </Link>
        </Paper>
      </Grid>
      {/*
      <Grid item>
        <Paper>
          <Link to="/example4">
            <Typography variant={"h3"}>4</Typography>
          </Link>
        </Paper>
      </Grid>
      */}
    </Grid>
  );
}

const themes = theme => ({});

export default withStyles(themes)(Wholosophy);
