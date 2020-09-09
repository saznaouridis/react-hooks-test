import React, { useState, Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import {
    Tabs,
    Tab,
    Box,
    AppBar, Toolbar, Link as LinkMaterial
} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import AddCountryForm from './components/AddCountryForm'
import EditCountryForm from './components/EditCountryForm'
import CountryForm from './components/CountryForm'
import axios from 'axios';
import './App.css'

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		minHeight: "100vh"
	},
	toolbar: {
		minHeight: "auto"
	},
	grow: {
		flexGrow: 1,
	},
	contentWrap: {
		paddingBottom: "2.5rem"
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
		position: "absolute",
		bottom: 0,
		width: "100%",
	}
const App = () => {
	const [countriesData,setCountriesData] = useState([]);	
	const initialState = { id: null, name: '', capital: '' }
	const [ countries, setCountries ] = useState(countriesData)
	const [ curCountry, setCurCountry ] = useState(initialState)
	const [ edit, setEdit ] = useState(false)
	const classes = useStyles();
	const addCountry = async (country) => {
		const id = await axios.post(`/`,country);
		getData();
	}
	const deleteCountry = async (id) => {
		setEdit(false)
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
		setEdit(true)
		setCurCountry(country)
	}
	
	}));
	return (
	<Router>
		<div className={classes.root}>
			<div className={classes.contentWrap}>
			<AppBar position="absolute">
			<Toolbar className={classes.toolbar}></Toolbar>
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
			
			</AppBar>
			</div>
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
export default App