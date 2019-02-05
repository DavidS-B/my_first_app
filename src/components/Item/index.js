import React from "react";
import "./index.css";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <ul>
          <li>
            <span className="label">Date de reprise </span>
            <span className="text" id="bold1">
              7 mars 2001
            </span>
          </li>
          <li>
            <span className="label">Date de sortie </span>
            <span className="text" id="bold2">
              27 septembre 1968
            </span>
          </li>
          <li>
            <span className="label">De </span>
            <span className="text">Stanley Kubrick</span>
          </li>
          <li>
            <span className="label">Avec </span>
            <span className="text">
              Keir Dullea, Gary Lockwood, William Sylvester
            </span>
          </li>
          <li>
            <span className="label">Genre </span>
            <span className="text">Science fiction</span>
          </li>
          <li>
            <span className="label">Nationalités </span>
            <span className="text">Américain, Britannique</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Item;
