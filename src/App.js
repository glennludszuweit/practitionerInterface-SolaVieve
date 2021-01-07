import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Containers from './containers/Containers';
import { useStyles } from './styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#11C4B0' },
    secondary: { main: '#BF0600' },
  },
});

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Containers />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
