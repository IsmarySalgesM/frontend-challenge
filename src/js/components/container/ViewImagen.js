import React, { Component } from 'react';
import '../container/ViewImagen.css';

class ViewImagen extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="content">
        <div className="masonry">
          {this.props.imagen.map(photo => {
            return (
              <div className="masonry-item">
                <img  src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="images" />
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

