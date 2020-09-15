import React from 'react';
import EditCountryForm from './EditCountryForm';
import AddCountryForm from './AddCountryForm';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
		margin: theme.spacing(2),
		TypographyStyle: {
			color:"blue"
		}
	  },
	},
}));
const PageAdd = (props) => {
   const classes = useStyles();
  return (
    <div className={classes.root}>
     <Grid
        container 
        direction="column"
        justify="center"
        alignItems="center"
      >
        {props.edit ? (
          <Grid item>
            <Typography
            align="left"
            color="primary"
            className={classes.TypographyStyle}
            style={{ fontSize: 25  }}
          >
            Edit
            </Typography>
            <EditCountryForm
              setEdit={props.setEdit}
              curCountry={props.curCountry}
            />
          </Grid>
        ) : (
          <Grid item>
          <Typography
            align="left"
            color="primary"
            className={classes.TypographyStyle}
            style={{ fontSize: 25  }}
          >
          Fill the brackets
          </Typography>
          <AddCountryForm ifDataChanged={props.ifDataChanged} />
          </Grid>
        )}
        </Grid>
      </div>
    
  )
}
export default PageAdd;