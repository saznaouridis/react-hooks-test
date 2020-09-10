import React, { Fragment, useState } from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";



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
  

const AddCountryForm = props => {
	const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

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
			
				<label for="capitals">Capitals</label>
				<input type="text" name="capital" value={country.capital} onChange={handleInputChange} />
			
			<p>
				<button
				className="btn btn-success"
				 variant="contained" 
				 onclick={() => handleButtonClick("/country")}>

			</button>
			</p>
		</form>
		</Fragment>
	)
}
export default AddCountryForm