import React from "react";
import "./index.css";

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <button type="button" id="one">
          Bande-annonce
        </button>
        <button type="button" id="two">
          Séances
        </button>
        <button type="button" id="three">
          Ce film en VOD
        </button>
      </div>
    );
  }
}

export default Button;
