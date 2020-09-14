import React, { useState } from 'react'
import { addCountry } from '../api_helpers'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
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
	const handleOnSubmit = e => {
		e.preventDefault()
		try{
			if (!country.name || !country.capital) {
				alert("Invalid Input");
			}
			else {
				addCountry(country)
        setCountry(initialState)
        props.ifDataChanged()
				window.location="/country"
			}
		}catch (err) {
			console.log(err);
		}
	}
	return (
		<div className={classes.root}>
		<form
			onSubmit={handleOnSubmit}	
		>
			<label className="text-center mt-5" for="countries">Countries</label>
			<input type="text" 
			name="name" 
			className="form-control" 
			value={country.name} 
			onChange={handleInputChange} />
			
				<label for="capitals">Capitals</label>
				<input type="text" name="capital" value={country.capital} onChange={handleInputChange} />
			
			<p>
				<Fab color="primary" aria-label="add" type="submit" style={{ fontSize: 25  }}>
					<AddIcon />
				</Fab>
			</p>
		</form>
		</div>
	)
}
export default AddCountryForm;