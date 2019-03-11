import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class Article extends React.Component {
  state = {};

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, cardStyle = {} } = this.props;
    return (
      <Card className={classes.card} style={cardStyle}>
        <CardHeader
          avatar={
            <Avatar aria-label="Article" className={classes.avatar}>
              A
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Factors Affecting Muscular Strength"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/images/couple_planking.webp"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            I am often asked why one person develops strength and muscle faster
            than another when he or she is performing the same exercises and
            following a similar strength training workout program. Many people
            feel that they must be doing something wrong because they aren’t
            getting the same results, muscular strength or muscular development
            as another person. It’s important to realize that there are six
            primary factors affecting every individual’s ability to achieve
            strength and muscle development, and we have little or no control
            over most of them.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography h2>Type of Muscle Fiber</Typography>
            <Typography paragraph>
              One of the most influential factors is muscle fiber type. We have
              two basic types of muscle fibers, often referred to as “slow
              twitch” and “fast twitch.” Slow twitch muscle fibers are best used
              for cardiovascular (aerobic) activities. They produce small levels
              of force for long periods of time and thus are better suited for
              endurance activities. Fast twitch fibers are best used for
              anaerobic activities. They produce high levels of force for short
              periods of time and are best suited for power activities such as
              weightlifting. Most men and women have an equal combination of
              both slow twitch and fast twitch fibers. However, some people
              inherit a high percentage of slow twitch fibers that enhance their
              performance in endurance activities, such as long distance
              runners. Most world class marathon runners have a very high amount
              of slow twitch fibers. World class sprinters or football players,
              for example, have relatively more fast twitch muscle fibers.
              Although both fiber types respond positively to strength training
              workouts, the fast twitch types experience greater increases in
              muscle size and strength, and thus may obtain greater and/or
              faster results from a strength training program.
            </Typography>
            <Typography h2>Age</Typography>
            <Typography paragraph>
              Another factor over which we have little control is age. Studies
              show that people of all ages can increase their muscle size and
              strength as a result of a safe and effective strength training
              program. However, the rate of strength and muscle gain appears to
              be greater from age 10-20, the years of rapid growth and
              development. After reaching normal physical maturity, muscular
              improvements usually don’t come as quickly.
            </Typography>
            <Typography h2>Gender</Typography>
            <Typography paragraph>
              Gender does not affect the quality of our muscle, but does
              influence the quantity. Although men’s and women’s muscle tissue
              are characteristically the same, men generally have more muscle
              tissue than women do because muscle size is increased by the
              presence of testosterone, the male sex hormone. The larger the
              muscles, the stronger the person; this is why most men are
              stronger than most women.
            </Typography>
            <Typography h2>Limb and Muscle Length</Typography>
            <Typography paragraph>
              Another strength factor that is naturally determined is limb
              length. Persons with short limbs tend to be able to lift more
              weight because of advantageous leverage factors (arms and legs).
              Similarly, differences in strength development may come about
              because of variation in muscle length. Some people have long
              muscles, and some people have short muscles. Persons with
              relatively long muscles have greater potential for developing size
              and strength than persons with relatively short muscles.
            </Typography>
            <Typography h2>Point of Tendon Insertion</Typography>
            <Typography paragraph>
              Muscle strength is also influenced by the point of tendon
              insertion. For example, let’s say Jim and John both have the same
              arm and muscle length. However, Jim’s biceps tendon attaches to
              his forearm farther from his elbow joint than John’s does. This
              gives Jim a biomechanical advantage: he is able to lift more
              weight than John in biceps exercises such as the Biceps Curl.
            </Typography>
            <Typography h2>Other Important Factors</Typography>
            <Typography paragraph>
              All of these factors affect our ability to gain strength and
              muscle development through training. Keep in mind, however, that
              the most influential factor in achieving good results is using a
              very slow, controlled lifting movement and lifting to the point of
              muscle fatigue. In addition to using good lifting technique, it is
              absolutely imperative that you not only train with intensity on a
              well-balanced program, but also give your muscles enough resting
              time between training sessions. Overtraining is a common mistake
              people make; it happens not only when you don’t allow your muscles
              enough rest, but also when you train with too many sets and
              exercises for each muscle group. Another mistake people make is
              doing the same program over and over again even after they have
              reached a plateau. Any time you 1) stop gaining strength or muscle
              size or 2) get bored, it is crucial that you change the program,
              so that you can go through a whole new phase achieving new
              results. We inherit most of these factors affecting strength from
              our parents, and they have a big impact on our size, strength, and
              appearance. It is very important that you not become obsessed with
              trying to look like a world-class body builder—or any other body
              type that is not your own. We are not all meant to look the same.
              It is very important that you learn about and accept your own
              body’s characteristics and type, so you can develop a reasonable
              program specific to realistic goals and personal interests.
              Genetics does clearly play a role in your health and appearance,
              but they certainly do not determine how often or well you train.
              Even if you are born with a genetic predisposition to being
              overweight or weak, the way you live is what will ultimately
              determine whether you become fit and strong or fat and weak.
              Weightlifting provides many important benefits that cannot be
              achieved by any other exercise or activity. Physiologically, the
              benefits of consistent strength training include an increase in
              muscle size and tone, increased muscle strength, and increases in
              tendon, bone, and ligament strength. Strength-training has also
              been shown to improve psychological health as well, by increasing
              self-esteem, confidence and self-worth. If you understand and
              accept your body, you will be able to work with it, not against
              it. Everyone can improve their strength, appearance, and
              performance level by consistently implementing an effective
              strength training program. The AFPA Strength Trainer Certification
              and continuing education courses offer an indepth view of strength
              training and conditioning for the entire body, and teaches you the
              most effective routines for your personal strength goals. Also you
              may want to know about these 10 Things to Avoid in Your Strength
              Training Workout.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const themes = theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

export default withStyles(themes)(Article);
