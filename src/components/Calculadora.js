import React from "react";
import "./Calculadora.css";
import Botones from "./Botones";

export default class Calculadora extends React.Component {
  render() {
    return (
        <div id="Calculadora">
            <textarea className = "input" maxLength="9"></textarea>
            <Botones></Botones>
        </div>     
    );
  };
};