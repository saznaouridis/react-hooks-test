import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


const EditCountryForm = props => {
  const classes = useStyles();
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
      <input  placeholder="{country.name}" type="text" name="name" value={country.name} onChange={handleInputChange} />
      
        <label for="capital">Capital</label>
        <input placeholder="{country.capital}" type="text" name="capital" value={country.capital} onChange={handleInputChange} />
      <p>
        <Button variant="contained" size="small" color="primary" className={classes.margin}>Update Country</Button>
        <Button variant="contained" size="small" color="primary" onClick={() => props.setEdit(false)} className={classes.margin}>
        Cancel
        </Button>
      </p>
    </form>
  )
}
export default EditCountryForm