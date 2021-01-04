import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '10px 0 20px 0',
    height: 350,
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
  menu: {
    padding: theme.spacing(2),
  },
}));
