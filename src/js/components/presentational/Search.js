import React from 'react';


const Search = (props) => {
  console.log(props)
    return (
        <form onSubmit={props.getSearch}>
          
                <input text="text" name="picture" />
            
            <button className="btnSearch">Buscar</button>
        </form>

    );
}


export default Search;
