import React from 'react';
import { Input, Button, Form, InputGroup } from 'reactstrap';
import './Search.css'



const Search = (props) => {
	console.log(props)
	return (
		<header className="content-input" name="form">
			<Form onSubmit={props.getSearch}>
				<InputGroup className="inputSearch">
					<Input text="text" name="picture" />
					<Button className="btnSearch">Buscar </Button>
				</InputGroup>
			</Form>
		</header>
	);
}


export default Search;
