import React, { Component } from "react";
import "./App.css";
// import Button from "./components/Button/";
// import Cover from "./components/Cover/";
// import Description from "./components/Description/";
import Header from "./components/Header/";
// import Item from "./components/Item/";
// import Logo from "./components/Logo/";
// import Subtitle from "./components/Subtitle/";
import Title from "./components/Title/";

class App extends Component {
  render() {
    return (
      <div>
        <Header>Allocine</Header>
        <Title>2001 : L'Odyssée de l'Espace</Title>
      </div>
    );
  }
}

export default App;
