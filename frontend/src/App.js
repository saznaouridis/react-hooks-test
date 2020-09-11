import React, { useState, Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./header"
//components 

import AddCountryForm from './components/AddCountryForm'
import EditCountryForm from './components/EditCountryForm'
import CountryForm from './components/CountryForm'
import axios from 'axios';
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
		margin: theme.spacing(2),
		TypographyStyle: {
			color:"blue"
		}
	  },
	},
  }));

function HomeIcon(props) {
	return (
	  <SvgIcon {...props}>
		<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
	  </SvgIcon>
	);
  }

const App = () => {

	// Data
	
	const [countriesData,setCountriesData] = useState([]);	
	const initialState = { id: null, name: '', capital: '' }

	// Setting state
	const [ countries, setCountries ] = useState(countriesData)
	const [ curCountry, setCurCountry ] = useState(initialState)
	const [ edit, setEdit ] = useState(false)

	// CRUD operations

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
	const classes = useStyles();
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
									edit={edit}
									setEdit={setEdit}
									curCountry={curCountry}
									updateCountry={updateCountry}
									
									/>
								</Fragment>
								) : (
								<Fragment>
									<h2>Fill the brackets</h2>
									<AddCountryForm 
									addCountry={addCountry} 
									/>
								</Fragment>
								)}
							</div>
				</div>
				</Route>
				<Route path="/country">
					<div className={classes.root}>	
					<Grid
					container 
					direction="column"
					justify="center"
					alignItems="center"
					>
						<Grid item>
						<Typography
						align="center"
						color="primary"
						className={classes.TypographyStyle}
						style={{ fontSize: 50  }}
						>Application
						</Typography>
						</Grid>
						<Grid item>
							<Typography	
								align="center"
								color="primary"
								className={classes.TypographyStyle}
								style={{ fontSize: 30  }}
								>View
								<CountryForm countries={countries} editRow={editRow} deleteCountry={deleteCountry} />
								</Typography>
						</Grid>
					</Grid>
							
						
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
		return (
			<div className={classes.root}>
				<Grid 
				container 
				direction="column"
				justify="center"
				alignItems="center"
				style={{ height: "200px"}}
				>
					<Grid item xs={3} style={{ textAlign: "center"}}>
						<HomeIcon color="primary" style={{ fontSize: 50  }} />
					</Grid>
					<Grid item style={{ textAlign: "center"}}>
						<Typography
							align="center"
							color="primary"
							className={classes.TypographyStyle}
							style={{ fontSize: 50  }}
							>
							Home
						</Typography>
					</Grid>
				</Grid>
			</div>
		);
	  }
}
export default App	