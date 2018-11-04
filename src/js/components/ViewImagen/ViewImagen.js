import React, { Component } from "react";
import ReactTooltip from 'react-tooltip'
import InfiniteScroll from 'react-infinite-scroller';
import './ViewImagen.css';
import Search from '../Search/Search.js'


class ViewImagen extends Component {
  constructor() {
    super()
    this.state = {
      imagen: [], // Se inicia el estado  con arreglo vacio
      page: 0, // Se inicia el estado en 0
      items: false, // Se inica en false 

    }

  }

  mountImagen() {
    let dataImagen = fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=03ff720509cad0d3a5d787e545a66e5e&tags=  
    venezuela&page=${this.state.page}&extras=description,date_upload,tags,date_taken,last_update,owner_name&per_page=80&format=json&nojsoncallback=1`)
      .then(response => response.json()) // Obtenemos la información en formato Json
      .then(responseImagen => {
        this.setState({ // Realizamos el reset de estados
          imagen: responseImagen.photos.photo, // Obtenemos la información solo de las fotos 
          page: this.state.page + 1, //  Obtenemos la segunda pagina
          items: true, // 

        })
      })
  }
  // Se obtiene informacion de api cuando se monta el componente
  componentDidMount() {
    this.mountImagen();
  }

  // Obtenemos informacion de la busqueda con la funcion del Boton
  getSearch = (e) => {
    e.preventDefault();
    let searchImagen = e.target.picture.value;
    let dataSearch = fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=03ff720509cad0d3a5d787e545a66e5e&tags=${searchImagen}&page=${this.state.page}&extras=description,date_upload,tags,date_taken,last_update,owner_name&per_page=100&format=json&nojsoncallback=1`)
      .then(response => response.json()) // Obtenemos la información en formato Json
      .then(responseSearch => {
        this.setState({ // Realizamos el reset de estados
          imagen: responseSearch.photos.photo, // Obtenemos la información solo de las fotos 
          page: 1, // Se obtiene la primera pagina
        })
      })

  }


  render() {
    // console.log(this.state.page)
    let pic = this.state.imagen;
    return (
      <div>
        <Search getSearch={this.getSearch} />
        <div className="content">
          <div className="masonry">

            <InfiniteScroll
              pageStart={0}
              loadMore={this.mountImagen.bind(this)}
              hasMore={this.state.items}
            // loader={<div className="loader" key={0}>Loading ...</div>}
            >
              {pic.map((photo, i) => {
                return (


                  <div key={i} className="masonry-item">
                    <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="images"

                      data-event='click'
                      data-for='imgSearch'
                      data-multiline={true}
                      data-tip={`Titulo: ${photo.title},
                     Descripción: Fotografia ${photo.description._content},
                     F.Post: ${photo.datetaken},
                     Visualizaciónes: ${photo.dateupload},
                     Tags: # ${photo.tags},
                     Usuario: ${photo.ownername}`} />
                    <ReactTooltip
                      className='contentTooltip'
                      id='imgSearch'
                      getContent={(dataTip) => `${dataTip}`}
                      place="top"
                      type="light"
                      effect="float"
                    />


                  </div>



                )
              })
              }
            </InfiniteScroll>
          </div>

        </div>
      </div>

    )
  }
}

export default ViewImagen;