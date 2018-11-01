import React, { Component } from 'react';

class ViewImagen extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        {this.props.imagen.map(photo => {
          console.log(photo)
          return (
            <div>
               <img   src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="images" />
            </div>
          )
        })
        }
      </div>


    )
  }
}
export default ViewImagen;