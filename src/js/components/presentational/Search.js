    // import React, { Component } from "react";
    // import { Input } from 'react-input-component';
    
    
    // class Search extends Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       items: [],
    //       page: 0,
    //       text: '',
    //     };
    
    //     this.handleChange = this.handleChange.bind(this);
    //   }
    
      
    
    //   handleChange = (e) => {
    //     let onePages = this.state.page + 1;
    //     this.setState({ text: e.target.value }, () => {
    //       let dataSearch = fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=03ff720509cad0d3a5d787e545a66e5e&tags=
    //       ${this.state.text}&page=${onePages}&per_page=30&format=json&nojsoncallback=1`)
    //       .then(response => response.json()) // Obtenemos la información en formato Json
    //       .then(responseSearch => {
    //         this.setState({ // Realizamos el reset de estados
    //           items: responseSearch // Obtenemos la información solo de las fotos 
    //         })
    //       })
    //     });
    //   }
    
    
    //   render() {
    //     console.log(this.state.items)
    //     return (
    //       <div>
            
    //         <input
    //           onChange={this.handleChange}
    //           value={this.state.text}
    //         />
    //       </div>
    //     );
    //   }
    
    
    // }
    
    // export default Search;
    