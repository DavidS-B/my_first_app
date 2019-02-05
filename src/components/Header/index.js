import React from "react";
import "./index.css";
import image from "../../assets/img/allocine-logo.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={image} alt="Logo" />
      </div>
    );
  }
}

export default Header;
