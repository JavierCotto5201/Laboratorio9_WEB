import React from "react";
import "./Tablero.css";
import Calculadora from "./Calculadora";

export default class Tablero extends React.Component {
  render() {
    return (
        <div id="Tablero">
          <Calculadora></Calculadora>
        </div>     
    );
  };
};