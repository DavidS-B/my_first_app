import React from "react";
import "./index.css";
import image from "../../assets/img/cover.jpg";

class Title extends React.Component {
  render() {
    return (
      <div className="cover">
        <img src={image} alt="Logo" />
      </div>
    );
  }
}

export default Title;
