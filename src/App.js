import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ViewImagen from "./js/components/ViewImagen/ViewImagen"


class App extends Component {
  render() {
    return (
      <div>
        <ViewImagen />
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
