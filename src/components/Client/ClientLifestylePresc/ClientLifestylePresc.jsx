import { useStyles } from './styles';
import { Button, Divider, InputBase, Paper } from '@material-ui/core';

function ClientLifestylePresc() {
  const classes = useStyles();

  return (
    <Paper variant='outlined' className={classes.paper}>
      <div className={classes.header}>
        <div>Lifestyle prescriptions</div>
        <div>
          <Button size='small' variant='outlined' color='default'>
            history
          </Button>
        </div>
      </div>
      <Divider />
      <InputBase
        fullWidth
        className={classes.inputBase}
        placeholder='Start writing prescriptions here .....'
        multiline='true'
        inputProps={{ 'aria-label': 'naked' }}
      />
      <Button
        size='small'
        variant='contained'
        color='default'
        className={classes.submitButton}
      >
        save
      </Button>
    </Paper>
  );
}

export default ClientLifestylePresc;
