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
            <Link to='/client/info/personal-info'>View</Link>
          </Button>
        </div>
      </div>
      <Divider />
      <div className={classes.menu}>
        <List>
          <ListItem button>
            <Link to='/client/info/personal-info'>Personal Information</Link>
          </ListItem>
          <ListItem button>
            <Link to='/client/info/medical-background'>Medical background</Link>
          </ListItem>
          <ListItem button>
            <Link to='/client/info/family-medical-background'>
              Family medical background
            </Link>
          </ListItem>
          <ListItem button>
            <Link to='/client/info/lifestyle-habits'>Lifestyle and habits</Link>
          </ListItem>
          <ListItem button>
            <Link to='/client/info/allergies'>Test results</Link>
          </ListItem>
          <ListItem button>
            <Link to='/client/info/test-results'>Allergies</Link>
          </ListItem>
        </List>
      </div>
    </Paper>
  );
}

export default ClientInfoOverview;
