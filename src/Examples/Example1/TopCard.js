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
import StayHealthy from "../../Components/StayHealthy";
import Give from "../../Components/Give";

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
              <Grid container wrap="nowrap">
                <Grid item xs={4}>
                  <List>
                    <ListItem>
                      <ListItemText
                        inset={false}
                        primary="Dr. Forrester"
                        secondary="Santa Clara"
                        classes={{
                          primary: classes.doctorIdent,
                          secondary: classes.doctorLoc
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={2}>
                  <br />
                  <List>
                    <ListItem>
                      <ListItemText
                        secondary="(555) 555 555"
                        classes={{ secondary: classes.doctorLoc }}
                        style={{ right: "-5rem" }}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <SwipeableViews
                style={styles.baseSlide}
                slideStyle={styles.slideContainer}
                enableMouseEvents={true}
              >
                <div className={[classes.swipeDivs].join(" ")}>
                  <Abilities />
                </div>
                <div className={[classes.swipeDivs].join(" ")}>
                  <Wholosophy />
                </div>
                <div className={[classes.swipeDivs].join(" ")}>
                  <Review />
                </div>
                <div className={[classes.swipeDivs].join(" ")}>
                  <Location />
                </div>
                <div className={[classes.swipeDivs].join(" ")}>
                  <StayHealthy />
                </div>
                <div className={[classes.swipeDivs].join(" ")}>
                  <Give />
                </div>
              </SwipeableViews>
              <Grid container justify={"center"} spacing={16}>
                <Grid item xs={1}>
                  <IconButton>
                    <FiberManualRecordIcon color="secondary" />
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton>
                    <FiberManualRecordIcon color="secondary" />
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton>
                    <FiberManualRecordIcon color="secondary" />
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton>
                    <FiberManualRecordIcon color="secondary" />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <img src="/images/happydoctor.png" />
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
    backgroundImage: "url(images/office_space_001.jpeg)",
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
    userSelect: "none",
    padding: "0 2rem 0 2rem"
  },
  slide: {
    padding: "0 10px"
    // width: "70%"
  },
  slidePaper: {
    backgroundColor: "rgba(0,0,0,.7)"
  }
});

const styles = {
  baseSlide: {
    padding: "0 0px"
  },
  slideContainer: {
    padding: "0 0px",
    width: "50%",
    height: "25vh"
  }
};

export default withStyles(themes)(TopCard);
