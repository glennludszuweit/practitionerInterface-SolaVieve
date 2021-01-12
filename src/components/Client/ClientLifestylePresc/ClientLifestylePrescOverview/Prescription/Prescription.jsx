import { FormControl, TextField } from '@material-ui/core';
import { useStyles } from './styles';

function Prescription({ handlePrescriptionChange }) {
  const classes = useStyles();

  return (
    <FormControl
      size='small'
      variant='outlined'
      className={classes.formControl}
    >
      <TextField
        label='Prescription'
        variant='outlined'
        size='small'
        placeholder='Prescription'
        onChange={handlePrescriptionChange}
      />
    </FormControl>
  );
}

export default Prescription;
