import React, { useState, Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//components 
<<<<<<< HEAD

=======
>>>>>>> b87b3c749968521beae6b0fefad907308d8d4d64
import AddCountryForm from './components/AddCountryForm'
import EditCountryForm from './components/EditCountryForm'
import CountryForm from './components/CountryForm'
import axios from 'axios';
import './App.css'
const App = () => {
	// Data
<<<<<<< HEAD
	
	const [countriesData,setCountriesData] = useState([]);	
	const initialState = { id: null, name: '', capital: '' }

	// Setting state
	const [ countries, setCountries ] = useState(countriesData)
	const [ curCountry, setCurCountry ] = useState(initialState)
	const [ edit, setEdit ] = useState(false)

=======
	const [countriesData,setCountriesData] = useState([]);	
	const initialState = { id: null, name: '', capital: '' };
	// Setting state
	const [ countries, setCountries ] = useState(countriesData);
	const [ curCountry, setCurCountry ] = useState(initialState);
	const [ edit, setEdit ] = useState(false);
>>>>>>> b87b3c749968521beae6b0fefad907308d8d4d64
	// CRUD operations
	const addCountry = async (country) => {
		const id = await axios.post(`/`,country);
		getData();
	}
	const deleteCountry = async (id) => {
<<<<<<< HEAD
		setEdit(false)
=======
		setEdit(false);
>>>>>>> b87b3c749968521beae6b0fefad907308d8d4d64
		await axios.delete(`/${id}`);
		getData();
	}
	const updateCountry = async (id, updatedCountry) => {
		setEdit(false)
		console.log(id);
		await axios.put(`/${id}`,updatedCountry);
		getData();
	}
	const getData = async () =>{
			const {data} = await axios.get(`/countries`);
			setCountriesData(data);
			setCountries(data);
	}
	useEffect(()=>{
		getData();
	},[])
	const editRow = async (country) => {
<<<<<<< HEAD
		setEdit(true)
		setCurCountry(country)
=======
		setEdit(true);
		setCurCountry(country);
>>>>>>> b87b3c749968521beae6b0fefad907308d8d4d64
	}
	return (
	<Router>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/" >Home</Link>
				  	</li>
					<li>
						<Link to="/info">Info</Link>
				  	</li>
				  	<li>
						<Link to="/country">Countries</Link>
				  	</li>
				</ul>
			</nav>
			
			<Switch>
				<Route path="/info">
					<Info />
				</Route>
				<Route path="/country">
					<div className="container">
						<h1 id = "hed1">Application</h1>
						<div className="flex-row">
							<div className="flex-large classleft">
								{edit ? (
								<Fragment>
									<h2>Edit</h2>
									<EditCountryForm
									edit={edit}
									setEdit={setEdit}
									curCountry={curCountry}
									updateCountry={updateCountry}
									/>
								</Fragment>
								) : (
								<Fragment>
									<h2>Fill the brackets</h2>
									<AddCountryForm addCountry={addCountry} />
								</Fragment>
								)}
							</div>
							<div className="flex-large classright">
								<h2>View</h2>
								<CountryForm countries={countries} editRow={editRow} deleteCountry={deleteCountry} />
							</div>
						</div>
					</div>
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	</Router>
	)
	function Home() {
		return <h1 id = "hed2">Home</h1>;
	  }
	function Info() {
		return <h1 id = "hed3">Info</h1>;
	  }
}
<<<<<<< HEAD
export default App
=======
export default  App;
>>>>>>> b87b3c749968521beae6b0fefad907308d8d4d64
