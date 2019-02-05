import React from "react";
import "./index.css";

class Subtitle extends React.Component {
  render() {
    return <h2 className={"subtitle"}>{this.props.children}</h2>;
  }
}

export default Subtitle;
