import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button/";
import Cover from "./components/Cover/";
import Description from "./components/Description/";
import Header from "./components/Header/";
import Item from "./components/Item/";
import Subtitle from "./components/Subtitle/";
import Title from "./components/Title/";

class App extends Component {
  render() {
    return (
      <div>
        <Header>Allocine</Header>
        <Title>2001 : L'Odyssée de l'Espace</Title>
        <div className="container">
          <Cover />
          <div className="container2">
            <Item />
            <Button />
          </div>
        </div>
        <Subtitle>SYNOPSYS ET DETAILS</Subtitle>
        <Description />
      </div>
    );
  }
}

export default App;
