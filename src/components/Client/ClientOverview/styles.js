import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: '10px 0 20px 0',
    height: 520,
    display: 'flex',
    flexDirection: 'column',
  },
  overviewImg: {
    marginTop: 20,
    borderRadius: 100,
    objectFit: 'cover',
    width: '200px',
    height: '200px',
  },
  communication: {
    border: '1px solid #11C4B0',
    margin: 10,
    color: '#11C4B0',
  },
}));
