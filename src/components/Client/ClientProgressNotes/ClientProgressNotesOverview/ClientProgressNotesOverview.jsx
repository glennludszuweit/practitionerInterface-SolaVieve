import { useStyles } from './styles';
import { Button, Divider, InputBase, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ClientProgressNotesOverview() {
  const classes = useStyles();

  return (
    <Paper variant='outlined' className={classes.paper}>
      <div className={classes.header}>
        <div>Progress notes</div>
        <div>
          <Button size='small' variant='outlined' color='primary'>
            <Link to='/client/progress-notes'>history</Link>
          </Button>
        </div>
      </div>
      <Divider />
      <InputBase
        fullWidth
        className={classes.inputBase}
        placeholder='Start writing progress notes here .....'
        multiline='true'
        inputProps={{ 'aria-label': 'naked' }}
      />
      <Button
        size='small'
        variant='contained'
        color='primary'
        className={classes.submitButton}
      >
        save
      </Button>
    </Paper>
  );
}

export default ClientProgressNotesOverview;
