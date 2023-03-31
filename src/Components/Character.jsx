import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  //// DOESN'T NEED STATE AS NOT LEARING ANY NEW INFO

  ////LIKE BUTTON
  onClick = () => {
    this.props.onLikeToggle(this.props.character.quote);
  };

  render() {
    ////DESTRUCTURE
    const {
      image,
      character: name,
      quote,
      characterDirection,
      liked,
    } = this.props.character;

    ////CHARACTER CARDS
    ////left facing characters face their quote using order
    if (characterDirection === "Left") {
      return (
        <div className="characterContainer">
          <div className="characterName">
            <Name name={name} />
          </div>
          <div className="imageAndQuote">
            <Image image={image} name={name} />
            <Quote quote={quote} />
          </div>

          {/* ////Like and delete buttons. Functions passed down from APP  */}
          <div className="likeDeleteButton">
            <button
              className={liked ? "liked" : "notLiked"}
              onClick={this.onClick}>
              {liked ? "Liked" : "Like"}
            </button>
            <div>
              <button onClick={() => this.props.onDelete(quote)}>Delete</button>
            </div>
          </div>
        </div>
      );
    }
    ////right facing characters face their quote using order
    return (
      <div className="characterContainer">
        <div className="characterName">
          <Name name={name} />
        </div>
        <div className="imageAndQuote">
          <Quote quote={quote} />
          <Image image={image} name={name} />
        </div>

        {/* ////Like and delete buttons. Functions passed down from APP */}
        <div className="likeDeleteButton">
          <button
            className={liked ? "liked" : "notLiked"}
            onClick={this.onClick}>
            {liked ? "Liked" : "Like"}
          </button>
          <div>
            <button onClick={() => this.props.onDelete(quote)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
