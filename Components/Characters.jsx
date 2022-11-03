import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  //// DOESN'T NEED STATE AS NOT LEARING ANY NEW INFO

  render() {
    ////DESTRUCTURE
    const { characters, onDelete, onLikeToggle } = this.props;

    //// PROP DRILLING
    //// .map renders data in the data in the DOM
    return characters.map((character, index) => (
      <Character
        key={character.quote + index} //// each child must have a unique key
        character={character}
        onDelete={onDelete}
        onLikeToggle={onLikeToggle}
      />
    ));
  }
}

export default Characters;
