import React, { Component } from "react";

class AddNewCharacter extends Component {
  state = {};
  //// Listener
  onInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  //   addCharacter = () => {
  //     const copy = { ...this.state };
  //     copy.addCharacter[this.state] = newCharacter;

  //     this.setState({ ...copy });
  //   };
  render() {
    return (
      <>
        <p>Add Character</p>
        <input type="text" onInput={this.onInput} id="addCurrency" />
        <button onClick={this.addCurrency}>Add</button>
        <div id="error" className="error"></div>
      </>
    );
  }
}

export default AddNewCharacter;
