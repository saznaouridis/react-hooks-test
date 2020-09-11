import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
  }));
const AddCountryForm = props => {
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
				props.addCountry(country)
				setCountry(initialState)
				window.location="/country"
			}
		}catch (err) {
			console.log(err);
		}
	}
	return (
		<Fragment>
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
				<IconButton color="primary" aria-label="add to shopping cart">
					<AddShoppingCartIcon />
					</IconButton>
			</p>
		</form>
		</Fragment>
	)
}
export default AddCountryForm