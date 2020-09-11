import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

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
        <button variant="contained" color="primary">Update Country</button> 
        <button variant="contained" color="primary"onClick={() => props.setEdit(false)} className="button muted-button">
        Cancel
        </button>
        </div>
      </p>
    </form>
  )
}
export default EditCountryForm