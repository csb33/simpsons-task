import React, { Component } from "react";

class Name extends Component {
  //// DOESN'T NEED STATE AS NOT LEARING ANY NEW INFO

  render() {
    ////NAME FROM API
    return <p>{this.props.name}</p>;
  }
}

export default Name;
