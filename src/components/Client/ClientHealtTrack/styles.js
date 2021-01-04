import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '10px 0 20px 0',
    height: 412,
    '& a': {
      color: '#212121',
      textDecoration: 'none',
    },
  },
  header: {
    padding: '10px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTableSection: {
    position: 'relative',
  },
  infoTable: {
    maxHeight: 355,
    overflowY: 'scroll',
    position: 'relative',
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  readmoreButton: {
    // '& button': { color: '#fff' },
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '97%',
    left: 0,
    right: 0,
    bottom: 0.5,
    backgroundColor: 'rgba(255,255,255, 0.95)',
    padding: '20px 0',
    textAlign: 'center',
  },
  infoChartSection: {
    padding: 20,
  },
  wqScore: {
    '& div': {
      fontSize: 35,
      fontWeight: 600,
      marginBottom: -10,
    },
    '& small': {
      fontSize: 13,
    },
  },
}));
