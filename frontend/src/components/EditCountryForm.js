import React, { useState, useEffect } from 'react'
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const EditCountryForm = props => {
  const {updateCountry} = props;
  const [ country, setCountry ] = useState(props.curCountry)
  useEffect(
    () => {
      setCountry(props.curCountry)
    },
    [ props ]
  )
  // skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  const handleInputChange = e => {
    try{
    const { name, value } = e.target
    setCountry({ ...country, [name]: value })
  }catch (err) {
    console.log(err);
    alert("Error");
     }
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        updateCountry(country.id, country)
        window.location = "/country"
      }}>
      <label for="country">Country</label>
      <input type="text" name="name" value={country.name} onChange={handleInputChange} />
      
        <label for="capital">Capital</label>
        <input type="text" name="capital" value={country.capital} onChange={handleInputChange} />
      <p>
        <div>
        <Button variant="contained" color="primary">Update Country</Button>
        <Button variant="contained" color="primary"onClick={() => props.setEdit(false)} className="button muted-button">
        Cancel
        </Button>
        </div>
      </p>
    </form>
  )
}
export default EditCountryForm