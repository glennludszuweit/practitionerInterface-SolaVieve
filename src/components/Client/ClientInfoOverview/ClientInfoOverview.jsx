import { useStyles } from './styles';
import { Button, Divider, List, ListItem, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ClientInfoOverview() {
  const classes = useStyles();

  return (
    <Paper variant='outlined' className={classes.paper}>
      <div className={classes.header}>
        <div>Information of client</div>
        <div>
          <Button size='small' variant='outlined' color='primary'>
            view
          </Button>
        </div>
      </div>
      <Divider />
      <div className={classes.menu}>
        <List>
          <ListItem button>
            <Link to='/'>Personal Information</Link>
          </ListItem>
          <ListItem button>
            <Link to='/'>Medical background</Link>
          </ListItem>
          <ListItem button>
            <Link to='/'>Family medical background</Link>
          </ListItem>
          <ListItem button>
            <Link to='/'>Lifestyle and habits</Link>
          </ListItem>
          <ListItem button>
            <Link to='/'>Test results</Link>
          </ListItem>
          <ListItem button>
            <Link to='/'>Allergies</Link>
          </ListItem>
        </List>
      </div>
    </Paper>
  );
}

export default ClientInfoOverview;
