import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

const Trademark = props => {
  const { classes, style } = props;
  return (
    <div className={classes.tradeMarkContainer} style={style}>
      <div>
        <Typography className={classes.tradeMark}>Wholosophy</Typography>
        <Typography
          className={[classes.tradeMark, classes.registeredMark].join(" ")}
        >
          &reg;
        </Typography>
      </div>
      <div className={classes.tradeMarkSloganContainer}>
        <Typography className={classes.tradeMarkSlogan}>
          "The Way You Live"
        </Typography>
        <Typography
          className={[classes.tradeMarkSlogan, classes.registeredMark].join(
            " "
          )}
        >
          &reg;
        </Typography>
      </div>
    </div>
  );
};

const styles = theme => ({
  tradeMarkContainer: {
    position: "absolute",
    overflow: "visible",
    whiteSpace: "nowrap",
    padding: "0 0 0 3em" // bottom {} left
  },
  tradeMark: {
    display: "inline-block",
    verticalAlign: "top",
    color: red[700],
    fontWeight: 600,
    fontSize: "+8em",
    textShadow: "2px -2px 4px rgba(0,0,0,.5)",
    overflow: "visible"
  },
  tradeMarkSloganContainer: {
    position: "relative",
    height: "2.1em",
    top: "-3em",
    left: "2.4em",
    overflow: "visible",
    whiteSpace: "nowrap"
  },
  tradeMarkSlogan: {
    //position: "relative",
    display: "inline-block",
    verticalAlign: "top",
    fontSize: "+3.5em",
    color: green[200],
    textShadow: "2px -2px 4px rgba(0,0,0,.3)",
    overflow: "visible"
  },
  registeredMark: {
    position: "relative",
    top: "-.3em",
    right: ".3em",
    transform: "scale(.3,.3)",
    overflow: "visible"
  }
});

Trademark.propTypes = {
  classes: PropTypes.object.isRequired,
  style: PropTypes.object
};

export default withStyles(styles)(Trademark);
