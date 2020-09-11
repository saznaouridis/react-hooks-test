import React, { Fragment } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const CountryForm = props => {
  const classes = useStyles();
  return(
  <TableContainer component={Paper}>
  <Table className={classes.table} aria-label="customized table">
  <TableHead> 
    <TableRow>
    <StyledTableCell>Country</StyledTableCell>
    <StyledTableCell align="right">Capital</StyledTableCell>
    <StyledTableCell align="right">Update</StyledTableCell>
    <StyledTableCell align="right">Delete</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {props.countries.length > 0 ? ( 
    props.countries.map(country => 
    <Fragment>
      <StyledTableRow key={country.id}>
       <StyledTableCell component="th" scope="row">{country.name}</StyledTableCell>
       <StyledTableCell align="right">{country.capital}</StyledTableCell>
       <StyledTableCell align="right">
         <button
           onClick ={() => {
            props.editRow(country)
           }
         }
           className="button muted-button"
           
      >
        Edit
        </button>
        </StyledTableCell>
        <StyledTableCell align="right">
        <IconButton 
        aria-label="delete"
        ssName={classes.margin} 
        size="small"
        onClick={() => {
          props.deleteCountry(country.id)
          window.location ="/add"
        }}
          className="button muted-button"
        >
          Delete  
      </IconButton >   
      </StyledTableCell>
      </StyledTableRow>
      
    </Fragment>)
    ) : (
      <tr>
        <td colSpan={3}>There are no countries</td>
      </tr>
    )} 
    </TableBody>
    </Table>
  </TableContainer>
  );
    }
export default CountryForm
