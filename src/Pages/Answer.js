import React, { Component } from "react";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

class Answer extends Component {
  render() {
    return (
      <div>
        <Button
          style={{
            marginBottom: "5px",
            width: "100%",
            textTransform: "none",
            justifyContent: "left",
          }}
          variant="outlined"
          color="primary"
          onClick={() => {
            // alert("answer");
          }}
        >
          Answer
        </Button>
      </div>
    );
  }
}

export default Answer;
