import React, { Component } from "react";
import ReactDOM from "react-dom";
import ViewImagen from './ViewImagen'
import Search from "../presentational/Search";



class ImagenApp extends Component {
  constructor() {
    super()
    this.state = {
      imagen: [], // Se inicia el estado  con arreglo vacio
      page: 0, // Se inicia el estado en 0

    }
  }


  // Se obtiene información de Api cuando se monte el componente
  componentDidMount() {
    let dataImagen = fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=03ff720509cad0d3a5d787e545a66e5e&tags=
    landscapes&page=${this.state.page}&per_page=30&format=json&nojsoncallback=1`)
    .then(response => response.json()) // Obtenemos la información en formato Json
    .then(responseImagen => {
      this.setState({ // Realizamos el reset de estados
        imagen: responseImagen.photos.photo, // Obtenemos la información solo de las fotos 
        page: 1, // Se obtiene la primera pagina
      })
    })
}




  render() {
     console.log(this.state.imagen) 
    return ( // Pasamos la información del arreglo con la información de las fotos
      <div> 
       {/* <Search/>  */}
      <ViewImagen imagen ={this.state.imagen} />  
    </div>
    );
  }
}

export default ImagenApp;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<ImagenApp />, wrapper) : false;
