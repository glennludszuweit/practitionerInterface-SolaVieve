import { InputBase } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '10px 0 20px 0',
    height: 190,
    '& a': {
      color: '#212121',
      textDecoration: 'none',
    },
  },
  header: {
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBase: {
    padding: 20,
  },
  dropdownContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '25px 20px',
  },
  submitButton: {
    color: '#fff',
    height: 30,
  },
  formControl: {
    margin: theme.spacing(1),
    width: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
