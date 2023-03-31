import React, { Component } from "react";
import axios from "axios";
import Splash from "./Components/Splash";
import Interface from "./Components/Interface";
import "./App.css";
import Blob from "./blob.png";

class App extends Component {
  ////MUST HAVE STATE AS LEARNING ALL INITIAL INF
  state = { screenMode: 0 };

  //// API data
  async componentDidMount() {
    const { data: characters } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ characters });

    setTimeout(() => {
      this.setState({ screenMode: 1 });
    }, 500);
  }

  //// LIKE/UNLIKE BUTTON
  //// Needs to be passed down to Charater
  //// Uses quote and index as this combo is a unique characteristic
  onLikeToggle = (quote) => {
    const indexOf = this.state.characters.findIndex((item) => {
      return item.quote === quote;
    });
    const copy = { ...this.state };
    if (copy.characters[indexOf].liked) {
      copy.characters[indexOf].liked = false;
    } else {
      copy.characters[indexOf].liked = true;
    }
    this.setState({ ...copy });
  };

  //// DELETE BUTTON
  //// Needs to be passed down to Charater
  //// Uses quote as a unique characteristic and splices using index
  onDelete = (quote) => {
    const indexOf = this.state.characters.findIndex((item) => {
      return item.quote === quote;
    });

    const copy = { ...this.state }; //// makes copy of state as must not delete from original state
    copy.characters.splice(indexOf, 1);
    this.setState({ ...copy });
  };

  //// ADD NEW CHARACTER BUTTON
  //// Needs to be passed down Interface
  //// Cannont add two with same quote and adds the new character before character 0 using index
  onAdd = () => {
    const indexOf = this.state.characters.findIndex(
      (item) => item.quote === this.state.quote
    );

    if (indexOf > -1) {
      return;
    }

    //// ADDING NEW CHARACTER
    const copy = { ...this.state }; //// creates copy of state. Must do this first!

    const blob = Blob; //// grabs image that has been hardcoded (bad practice but just trying it out)

    //// makes first letter of new character name and quote a capital
    const characterName =
      this.state.character.charAt(0).toUpperCase() +
      this.state.character.slice(1);

    const characterQuote =
      this.state.quote.charAt(0).toUpperCase() + this.state.quote.slice(1);

    //// adds the new character using the copy not the original
    copy.characters.unshift({
      character: characterName,
      quote: characterQuote,
      image: blob,
      characterDirection: "Right",
    });
    this.setState({ ...copy });
  };

  //// LISTENER FOR DATA THAT IS INPUT
  //// Must be passed to interface and is universal so can be used by both "add new character" and "search"
  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    //// LOADING SCREEN
    if (this.state.screenMode === 0) {
      return <Splash />;
    }

    //// DESTRUCTURE
    let { characters } = this.state;

    //// TOTAL LIKED COUNTER
    let count = 0;
    characters.forEach((character) => {
      if (character.liked) {
        count++;
      }
    });

    //// SEARCH IS NO LONGER CASE SENSITIVE AND IGNORES A SPACE AT START
    if (this.state.search) {
      characters = characters.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.state.search.toLowerCase().trim());
      });
    }

    //// WHERE ALL PROPS MUST BE PASSED DOWN TO CHILDREN
    //// "Prop Drilling"
    return (
      <Interface
        onInput={this.onInput}
        onDelete={this.onDelete}
        characters={characters}
        onAdd={this.onAdd}
        onLikeToggle={this.onLikeToggle}
        count={count}
      />
    );
  }
}

export default App;
