import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { addCountry } from '../api_helpers';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '25ch',
	  },
	},
	extendedIcon: {
	  marginRight: theme.spacing(1),
	},
  }));
const AddCountryForm = (props) => {
	const classes = useStyles();
	const initialState = { }
	const [ country, setCountry ] = useState(initialState)
	const handleInputChange = e => {
		try{
		const { name, value } = e.target
		setCountry({ ...country, [name]: value })
		}catch(err) {
			console.log(err);
			alert("Error");
		}
	}
	const history = useHistory();
	const handleOnSubmit = e => {
		e.preventDefault()
		try{
			if (!country.name || !country.capital) {
				alert("Invalid Input");
			} else {
				let res= addCountry(country)
				console.log(res);
				//country.id = country.length + 1;
				//setCountry([ ...country, country ]);
				setCountry((prevState) => {
					const data = [...prevState.data];
					data.push(res.data);
					return {...prevState, data};
				});

				/*
				props.ifDataChanged()
				setCountry(initialState)
				props.ifDataChanged()
				//window.location="/country"
				*/

				history.push('/country')
			}
		}catch (err) {
			console.log(err);
		}
	}
	return (
		<div className={classes.root}>
		<form
			className={classes.root}
			noValidate autoComplete="off"
			onSubmit={
				handleOnSubmit}	
		>
			<TextField 
				id="standard-basic" 
				placeholder="Enter Country name"
				type="text" 
				name="name" 
				className="form-control" 
				value={country.name} 
				onChange={handleInputChange} />
			
			<TextField 
				id="standard-basic" 
				placeholder="Enter Capital name"
				type="text" 
				name="capital" 
				value={country.capital} 
				onChange={handleInputChange} />
			
			<p>
				<Fab color="primary" aria-label="add" type="submit" size="small">
					<AddIcon />
				</Fab>
			</p>
		</form>
		</div>
	)
}
export default AddCountryForm;