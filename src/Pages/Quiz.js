import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import Answers from "./Answers";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Quiz.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: "#3f51b5",
  },
  questionSection: {
    color: "#3f51b5",
    fontFamily: "Roboto",
    fontSize: "x-large",
    fontWeight: "500",
    minHeight: "35px",
    width: "100%",
  },
  blueBg: {
    color: "#3f51b5",
    width: "100px",
  },
}));

export default function Quiz() {
  const classes = useStyles();

  //     constructor(props) {
  //         super(props);
  //     }
  //   console.log(this.props);
  return (
    <div>
      <header className="App-header">
        <h1>QUIZ</h1>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid container>
              <Grid container>
                <div className={classes.blueBg}>
                  <QuestionAnswerRoundedIcon color="primary" />1 of 10
                </div>
              </Grid>
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.questionSection}
              >
                Question question question question question question question
                question question?
              </Typography>
              <Grid item xs={12} sm container>
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="stretch"
                >
                  <Answers></Answers>
                </Grid>
              </Grid>
              <Grid item>
                <ButtonBase className={classes.image} disabled>
                  <Avatar className={classes.largeAvatar}>
                    <HelpOutlineRoundedIcon />
                  </Avatar>
                </ButtonBase>
              </Grid>
            </Grid>
            <Grid container>
              <div style={{ flex: "1" }}></div>

              <Route
                render={({ history }) => (
                  <Button
                    color="primary"
                    style={{ float: "right" }}
                    onClick={() => {
                      history.push("/Quiz?id=" + 1);
                    }}
                    endIcon={<NavigateNextIcon />}
                  >
                    Next
                  </Button>
                )}
              />
            </Grid>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}
