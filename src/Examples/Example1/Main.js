import React from "react";

import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Article from "../../Components/Article";

function Main(props) {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Article />
      </Grid>
      <Grid item>
        <Article />
      </Grid>
      <Grid item>
        <Article />
      </Grid>
      <Grid item>
        <Article />
      </Grid>
      <Grid item>
        <Article />
      </Grid>
    </Grid>
  );
}

const themes = theme => ({});

export default withStyles(themes)(Main);
