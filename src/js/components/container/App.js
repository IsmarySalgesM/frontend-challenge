import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";



class ImagenApp extends Component {
    constructor() {
      super()
      this.state = {
      imagen : [],
      error: false,
    
      }
    }
  
   componentDidMount(){
   let dataImagen = fetch('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=03ff720509cad0d3a5d787e545a66e5e&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1')
    .then((response) => {
        return response.json()
      })
      .then((error) => {
        console.log(JSON.stringify(error))
      })  
    
   
    }
  
  
    render() {
     
      return (
        <div>
       
        </div>
      );
    }
  }
  
  export default ImagenApp;
  


const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<ImagenApp/>, wrapper) : false;
// export default FormContainer;