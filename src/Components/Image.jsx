import React, { Component } from "react";

class Image extends Component {
  //// DOESN'T NEED STATE AS NOT LEARING ANY NEW INFO

  render() {
    ////DESTRUCTURE
    const { image, name } = this.props;

    ////IMAGE FROM API
    return <img src={image} alt={name} />;
  }
}

export default Image;
