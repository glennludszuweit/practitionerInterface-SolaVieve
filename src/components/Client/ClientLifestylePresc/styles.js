import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '10px 0 20px 0',
    height: 190,
    '& a': {
      color: '#212121',
      textDecoration: 'none',
    },
    position: 'relative',
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
  submitButton: {
    position: 'absolute',
    right: 30,
    bottom: 20,
  },
}));
