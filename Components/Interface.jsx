import React, { Component } from "react";
import Characters from "./Characters";

class Interface extends Component {
  //// Must have a state because it is learning new info. Eg: Add New Character
  state = {};

  render() {
    return (
      //// HEADER SECTION CONTAINING ADD NEW, SEARCH AND TOTAL LIKES
      //// Uses functions from APP like "onInput" and "onAdd"
      <div className="interfaceContainer">
        <h1>Welcome to SimpsonGram</h1>

        <div className="header">
          <div
            onInput={this.props.onInput}
            className="characterCreateNewSearchLikes">
            <h2>Search Characters</h2>
            <input type="text" name="search" />
          </div>
          <div
            onInput={this.props.onInput}
            className="characterCreateNewSearchLikes">
            <h2>Create New Character</h2>
            <div className="characterCreateNewSearchLikes">
              <label className="characterCreateNewSearchLikes">
                Name:
                <input type="text" name="character" />
              </label>
              <label className="characterCreateNewSearchLikes">
                Quote:
                <input type="text" name="quote" />
              </label>
            </div>
            <button onClick={this.props.onAdd}>Add</button>
          </div>

          <div className="characterCreateNewSearchLikes">
            <h2>Total Likes:</h2>
            <p>{this.props.count}</p>
          </div>
        </div>
        {/* PROP DRILLING */}
        <Characters
          onDelete={this.props.onDelete}
          characters={this.props.characters}
          onLikeToggle={this.props.onLikeToggle}
        />
      </div>
    );
  }
}

export default Interface;
