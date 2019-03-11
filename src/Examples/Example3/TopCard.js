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
  ListItemText,
  IconButton
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { withStyles } from "@material-ui/core/styles";

import Abilities from "../../Components/Abilities";
import Wholosophy from "../../Components/Wholosophy";
import Location from "../../Components/Location";
import Review from "../../Components/Review";

function TopCard(props) {
  const { classes } = props;
  return (
    <Paper elevation={0}>
      <div className={[classes.heading, classes.layout].join(" ")}>
        <Grid
          container
          direction={"row-reverse"}
          justify={"space-between"}
          alignItems={"stretch"}
          alignContent={"stretch"}
          spacing={4}
          wrap={"nowrap"}
        >
          <Grid item xs={10}>
            <Paper style={{ backgroundColor: "rgba(0,0,0,0)" }} elevation={0}>
              <List>
                <ListItem>
                  <ListItemText
                    inset={false}
                    primary="Dr. Forrester"
                    secondary="Santa Clara (555) 555 555"
                    classes={{
                      primary: classes.doctorIdent,
                      secondary: [classes.doctorLoc, classes.strokedText].join(
                        " "
                      )
                    }}
                  />
                </ListItem>
              </List>
              <Review />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={0}
              style={{ backgroundColor: "rgba(0,0,0,0)", paddingTop: "3em" }}
            >
              <img src="/images/happydoctor.png" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}

const themes = theme => ({
  root: {
    flexGrow: 1
  },
  layout: {
    minHeight: "33vh"
  },
  doctorIdent: {
    fontSize: "+2em" //Insert your required size
  },
  doctorLoc: {
    fontSize: "+1em" //Insert your required size
  },
  heading: {
    backgroundImage: "url(images/office_space_003.jpeg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margins: "2em",
    padding: "2em"
  },
  specalitiesListItems: {
    paddingTop: ".1rem",
    paddingBottom: ".1rem"
  },
  swipeDivs: {
    userSelect: "none"
  },
  slide: {
    padding: "0 10px"
    // width: "70%"
  },
  slidePaper: {
    backgroundColor: "rgba(0,0,0,.7)"
  },
  strokedText: {
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
  }
});

const styles = {
  baseSlide: {
    padding: "0 30px"
  },
  slideContainer: {
    padding: "0 10px",
    width: "45%",
    height: "25vh"
  }
};

export default withStyles(themes)(TopCard);
