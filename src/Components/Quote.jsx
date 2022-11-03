import React, { Component } from "react";

class Quote extends Component {
  //// DOESN'T NEED STATE AS NOT LEARING ANY NEW INFO

  render() {
    ////QUOTE FROM API
    return <p>{this.props.quote}</p>;
  }
}

export default Quote;
