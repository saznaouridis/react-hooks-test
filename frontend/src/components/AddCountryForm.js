import React, { Fragment, useState } from 'react'
const AddCountryForm = props => {
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
<<<<<<< HEAD:frontend/src/components/AddCountryForm.js
			
=======
>>>>>>> b87b3c749968521beae6b0fefad907308d8d4d64:frontend/src/forms/AddCountryForm.js
				<label for="capitals">Capitals</label>
				<input type="text" name="capital" value={country.capital} onChange={handleInputChange} />
			<p>
				<button className="btn btn-success">Add</button>
			</p>
		</form>
		</Fragment>
	)
}
<<<<<<< HEAD:frontend/src/components/AddCountryForm.js
export default AddCountryForm
=======
export default AddCountryForm;

>>>>>>> b87b3c749968521beae6b0fefad907308d8d4d64:frontend/src/forms/AddCountryForm.js
