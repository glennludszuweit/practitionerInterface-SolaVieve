import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tabHeader: {
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    color: '#fff',
  },
  tableContainer: {
    maxWidth: '90%',
    margin: '0 auto',
  },
  inputFields: {
    width: 250,
    margin: -8,
  },
  resize: {
    fontSize: 14,
  },
}));
