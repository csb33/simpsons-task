import React, { Component } from "react";
import Characters from "./Characters";

class Interface extends Component {
  //// Must have a state because it is learning new info. Eg: Add New Character
  state = {};

  render() {
    return (
      //// HEADER SECTION CONTAINING ADD NEW, SEARCH AND TOTAL LIKES //
      // Uses functions from APP like "onInput" and "onAdd"
      <>
        <div className="interfaceContainer">
          <div className="title">
            <div>Welcome to</div>
            <h1>SimpsonGram</h1>
          </div>
          <div className="header">
            {/* LIKE */}
            <div className="searchLikes">
              <h2>Total Likes:</h2>
              <div>{this.props.count}</div>
            </div>
            {/* SEARCH */}
            <div onInput={this.props.onInput} className="searchLikes">
              <h2>Search Characters</h2>
              <input type="text" name="search" />
            </div>
          </div>
          {/* ADD NEW */}
          <div onInput={this.props.onInput} className="characterContainer">
            <h2>Create New Character</h2>
            <label>
              Name:
              <input type="text" name="character" />
            </label>
            <label>
              Quote:
              <input type="text" name="quote" />
            </label>

            <button onClick={this.props.onAdd}>Add</button>
          </div>

          {/* PROP DRILLING */}
          <Characters
            onDelete={this.props.onDelete}
            characters={this.props.characters}
            onLikeToggle={this.props.onLikeToggle}
          />
        </div>
        <div className="rotateScreen">
          <p>
            It looks like the characters are a little too big for your screen.
            Try rotating!
          </p>
        </div>
      </>
    );
  }
}

export default Interface;
