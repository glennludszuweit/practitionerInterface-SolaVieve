import { makeStyles } from '@material-ui/core/styles';

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
  formContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '25px 20px',
  },
  dropdownContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 1,
  },
  submitButton: {
    color: '#fff',
    height: 30,
    marginLeft: 30,
    marginRight: 10,
  },
}));
