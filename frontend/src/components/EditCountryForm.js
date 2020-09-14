import React, { useState, useEffect } from 'react'
import { updateCountry } from '../api_helpers';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
    margin: theme.spacing(2),
    textAlign: 'center',
		TypographyStyle: {
			color:"blue"
		}
	  },
	},
}));



const EditCountryForm = (props) => {
  const classes = useStyles();
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
        props.setEdit(false)
        updateCountry(country.id, country)
        window.location = "/country"
      }}>
      
      <input placeholder="Enter Country Name" type="text" name="name" value={country.name} onChange={handleInputChange} />
      
       
        <input placeholder="Enter Capital Name" type="text" name="capital" value={country.capital} onChange={handleInputChange} />
      <p>
        <div className={classes.root}>
        <Grid container spacing={10}>
        <Grid item xs={8}>
        <Button 
        type="submit" 
        size="small" 
        variant="contained"
         color="primary"
         >
        Update Country
        </Button> 
        </Grid>
        <Grid item xs={8}>
        <Button 
        type="submit" 
        size="small" 
        variant="contained" 
        color="primary"
        onClick={() => props.setEdit(false)} 
        className="button muted-button"
        >
        Cancel
        </Button>
        </Grid>
        </Grid>
        </div>
      </p>
    </form>
  )
}
export default EditCountryForm