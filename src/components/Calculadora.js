import React from "react";
import "./Calculadora.css";
import Botones from "./Botones";
import * as math from "mathjs";

/*Patel, N. (2018, July 2). How To Build A Simple Calculator Application With React.JS. Medium. https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd*/
/*chahal. (2019, June 11). Passing Data Between React Components — Parent, Children, Siblings. Medium. https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf*/

export default class Calculadora extends React.Component {
  constructor(){
    super();

    this.state = {
        result: "",
        signo:"",
        valor:"",
    }
  }

  callbackFunction = (childData) =>{
      this.setState({result: this.state.result.substring(0,8) + childData})
  }

  callbackFunction2 = (childData) =>{
    this.setState({signo: childData, valor:this.state.result.substring(0,8), result:""})
  }

  equalSign = (childData) =>{
    this.setState({result:math.evaluate(this.state.valor + this.state.signo + " " + this.state.result).toString().substring(0,8)});
    if(this.state.result >= 999999999){
      this.setState({result:"ERROR"});
    }
  }

  clearBoton = (childData) =>{
    this.setState({valor:"", result:"", singo:""});
  }

  MasMenosSign = (childData) =>{
    this.setState({result:math.evaluate("-1 * " + this.state.result).toString().substring(0,8)});
  }

  render() {
    return (
        <div id="Calculadora">
            <textarea className = "input" maxLength="9" value={this.state.result}></textarea>
            <Botones añadirV = {this.callbackFunction} signo = {this.callbackFunction2} igual = {this.equalSign} limpiar = {this.clearBoton} Mm = {this.MasMenosSign}></Botones>
        </div>     
    );
  };
};