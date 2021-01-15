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
    margin: '10px 0 20px 0',
    padding: 0,
  },
  header: {
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    color: '#fff',
  },
  tabsRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsLabel: {
    border: '1px solid #e8e8e8',
  },
  tabsContent: {
    minHeight: 900,
    margin: '5px 0',
    paddingBottom: 20,
  },
}));
