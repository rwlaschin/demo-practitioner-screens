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
          direction={"row"}
          justify={"center"}
          alignItems={"stretch"}
          alignContent={"stretch"}
          spacing={40}
          wrap={"nowrap"}
        >
          <Grid item>
            <Paper
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                minWidth: "11rem",
                maxWidth: "40vw",
                maxHeight: "40%"
              }}
              elevation={0}
            >
              <Grid container justify={"center"}>
                <Grid item>
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
                <Grid item>
                  <Wholosophy />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <img
              src="/images/happydoctor.png"
              style={{ height: "300px", transform: "scale(-1,1)" }}
            />
          </Grid>
        </Grid>
        <SwipeableViews enableMouseEvents={true} slideStyle={{ width: "100%" }}>
          <Grid container wrap="nowrap" spacing={0}>
            <Grid item className={classes.selectedTab} xs={6}>
              <div>
                <Typography>Abilities</Typography>
                <Abilities nobackground={true} />
              </div>
            </Grid>
            <Grid item className={classes.tab} xs={6}>
              <div>
                <Typography>Client Review</Typography>
                <Review nobackground={true} />
              </div>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={0}>
            <Grid item className={classes.selectedTab} xs={6}>
              <div>
                <img src="/images/office_space_002.jpeg" />
              </div>
            </Grid>
            <Grid item className={classes.tab} xs={6}>
              <div>
                <Typography>Location</Typography>
                <Location nobackground={true} />
              </div>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={0}>
            <Grid item className={classes.selectedTab} xs={6}>
              <div>
                <Typography>How I Stay Healthy</Typography>
                <StayHealthy nobackground={true} />
              </div>
            </Grid>
            <Grid item className={classes.tab} xs={6}>
              <div>
                <Typography>How I Give Back</Typography>
                <Give nobackground={true} />
              </div>
            </Grid>
          </Grid>
        </SwipeableViews>
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
    //backgroundImage: "url(images/office_space_001.jpeg)",
    backgroundImage:
      "linear-gradient(to bottom right, rgba(50,0,100,.5), rgba(1,1,1,0))",
    backgroundColor: "rgba(0,0,0,.3)",
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
  selectedTab: {
    backgroundColor: "rgba(50,0,100,.5)",
    height: "13rem",
    overflow: "hidden"
  },
  tab: {
    backgroundColor: "rgba(150,0,200,.5)",
    height: "13rem",
    overflow: "hidden"
  }
});

const styles = {
  baseSlide: {
    padding: "0 0px"
  },
  slideContainer: {
    padding: "0 0px",
    width: "45%",
    height: "25vh"
  }
};

export default withStyles(themes)(TopCard);
