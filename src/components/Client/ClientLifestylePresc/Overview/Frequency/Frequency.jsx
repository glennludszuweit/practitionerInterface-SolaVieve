import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useStyles } from './styles';

function Frequency({ frequency, handleFrequencyChange }) {
  const classes = useStyles();

  return (
    <FormControl
      size='small'
      variant='outlined'
      className={classes.formControl}
    >
      <InputLabel id='demo-simple-select-outlined-label'>Frequency</InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        value={frequency}
        onChange={handleFrequencyChange}
        label='Frequency'
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Frequency;
