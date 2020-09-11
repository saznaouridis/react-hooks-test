import React, { useState, Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./header"
//components 

import AddCountryForm from './components/AddCountryForm'
import EditCountryForm from './components/EditCountryForm'
import CountryForm from './components/CountryForm'
import axios from 'axios';
import './App.css'

const App = () => {

	// Data
	
	const [countriesData,setCountriesData] = useState([]);	
	const initialState = { id: null, name: '', capital: '' }

	// Setting state
	const [ countries, setCountries ] = useState(countriesData)
	const [ curCountry, setCurCountry ] = useState(initialState)
	const [ edit, setEdit ] = useState(true)

	// CRUD operations

	const addCountry = async (country) => {
		setEdit(false)
		const id = await axios.post(`/`,country);
		getData();
	}
	const deleteCountry = async (id) => {
		setEdit(false)
		await axios.delete(`/${id}`);
		getData();
	}
	const updateCountry = async (id, updatedCountry) => {
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
		setCurCountry(country)
	}
	return (
	<Router>
		<div>	
		<Header />
			<Switch>
				<Route path="/add">
				<div className="flex-row">
							<div className="flex-large classleft">
								{edit ? (
								
								<Fragment>
									
									<h2>Edit</h2>
									<EditCountryForm
									
									curCountry={curCountry}
									updateCountry={updateCountry}
									
									/>
								</Fragment>
								) : (
								<Fragment>
									<h2>Fill the brackets</h2>
									<AddCountryForm 
									edit={edit}
									setEdit={setEdit}
									addCountry={addCountry} 
									/>
								</Fragment>
								)}
							</div>
				</div>
				</Route>
				<Route path="/country">
					<div className="container">
						<h1 id = "hed1">Application</h1>
							<div className="flex-large classright">
								<h2>View</h2>
								<CountryForm countries={countries} editRow={editRow} deleteCountry={deleteCountry} />
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
}
export default App