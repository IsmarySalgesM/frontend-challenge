import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'  
import '../container/ViewImagen.css';

class ViewImagen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <div className="masonry">
          {this.props.imagen.map((photo, i) => {
            return (
              <div key={i} className="masonry-item">
                <img  src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="images" 
                    
                     data-event='click'
                     data-for='imgSearch'
                     data-multiline={true} 
                     data-tip={`Titulo: ${photo.title},
                     Descripción: ${photo.description._content},
                     F.Post: ${photo.datetaken},
                     Visualizaciónes: ${photo.dateupload},
                     Tags: # ${photo.tags},
                     Usuario: ${photo.ownername}`}/>
                     <ReactTooltip 
                     className='contentTooltip'
                     id='imgSearch'
                     getContent={(dataTip) =>`${dataTip}`}
                     place="top"
                     type="light" 
                     effect="float"
                     />             
              
              </div>



            )
          })
          }
        </div>

      </div>
    )
  }
}
export default ViewImagen;

