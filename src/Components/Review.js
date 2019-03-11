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

function Review(props) {
  const { classes, nobackground } = props;
  const backgroundColor = nobackground
    ? { backgroundColor: "inherit" }
    : { backgroundColor: "rgba(0,0,0,.7)" };
  return (
    <Paper
      style={{ ...backgroundColor, maxHeight: "10rem", overflowY: "hidden" }}
      elevation={0}
    >
      <List>
        <ListItem>
          <ListItemText
            index={false}
            secondary="❝ Our daughter (a college athlete) had two previous knee surgeries and it looked like she needed a third.  We opted to get a second opinion rather than return to the original doctor and selected Dr. Akizuki in large part because of reviews on Yelp. It was clear from the  beginning that he and his staff understood the concept of working with an athlete that needs quick action and to return to their sport as soon as is safe.  The first thing Trisha, the appointment scheduler, asked when I called for an appointment was whether or not we had a recent MRI and since we did not, she set one up immediately, before we even saw the doctor - unheard of in the other ortho offices I contacted... they all wanted a preliminary visit before ordering an MRI.  We got an MRI, had the appointment with Akizuki and our daughter had surgery... all within a week and a half - crucial since she was home for a brief visit during the summer and our goal was to get her back up and active as soon as possible.  It has now been two months since the surgery and Dr. Akizuki has not only been involved in her rehab (talking to athletic trainers at her school) but has been refreshingly accommodating with regards to our limited windows of availability (bringing our daughter home over a weekend for a cortisone shot in the knee) and again, his office staff has been responsive and easy to deal with, always professional and very understanding.  We highly recommend Dr. Akizuki - even with his busy schedule, he has proven to be an excellent choice. ❝"
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

export default withStyles(themes)(Review);
