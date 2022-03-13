import React, { Component } from "react";

export default class Today extends Component {
  state = {
    today: new Date().toLocaleString(),
  };

  temporizador = setInterval(() => {
    this.setState({
      today: new Date().toLocaleString(),
    });
  }, 1000);

  render() {
    return <div>Fecha: {this.state.today}</div>;
  }
}
