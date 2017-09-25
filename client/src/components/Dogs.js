import React, { Component } from "react";

class Dogs extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/api/dogs").then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        message: data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Dogs</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Dogs;