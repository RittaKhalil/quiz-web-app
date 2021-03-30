import React, { Component } from "react";
import { Route } from "react-router-dom";
import Answer from "./Answer";
import Button from "@material-ui/core/Button";

class Answers extends Component {
  constructor() {
    super();
  }
  getApi() {
    fetch("https://localhost:5001/api/answers/q_id/1").then((res) =>
      res.json()
    );
  }
  render() {
    this.getApi();
    const elements = ["one", "two", "three", "four"];
    const items = [];

    for (const [index, value] of elements.entries()) {
      items.push(<Answer key={index}></Answer>);
    }

    return (
      <div>{items}</div>
      //  https://localhost:5001/api/answers/q_id/1
    );
  }
}

export default Answers;
