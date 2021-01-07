import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: '#263041',
    flexGrow: 1,
    marginTop: -35,
  },
  pageTopButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px 0 20px 0',
  },
}));
