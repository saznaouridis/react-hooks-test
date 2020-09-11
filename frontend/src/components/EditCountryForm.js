import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  }
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
      <input type="text" name="name" value={country.name} onChange={handleInputChange} />
      
        <label for="capital">Capital</label>
        <input type="text" name="capital" value={country.capital} onChange={handleInputChange} />
      <p>
        <button variant="contained" color="primary">Update Country</button>
        <button variant="contained" color="primary" onClick={() => props.setEdit(false)} className="button muted-button">
        Cancel
        </button>
      </p>
    </form>
  )
}
export default EditCountryForm