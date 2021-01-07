import { useStyles } from './styles';
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@material-ui/core';
import { useState } from 'react';

function ClientLifestylePresc() {
  const classes = useStyles();
  const [select, setSelect] = useState('');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <Paper variant='outlined' className={classes.paper}>
      <div className={classes.header}>
        <div>Lifestyle prescriptions</div>
        <div>
          <Button size='small' variant='outlined' color='primary'>
            history
          </Button>
        </div>
      </div>
      <Divider />

      <div className={classes.dropdownContainer}>
        <FormControl
          size='small'
          variant='outlined'
          className={classes.formControl}
        >
          <InputLabel id='demo-simple-select-outlined-label'>
            Dimension
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={select}
            onChange={handleChange}
            label='Dimension'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          size='small'
          variant='outlined'
          className={classes.formControl}
        >
          <InputLabel id='demo-simple-select-outlined-label'>Aspect</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={select}
            onChange={handleChange}
            label='Aspect'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          size='small'
          variant='outlined'
          className={classes.formControl}
        >
          <InputLabel id='demo-simple-select-outlined-label'>
            Prescription
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={select}
            onChange={handleChange}
            label='Prescription'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          size='small'
          variant='outlined'
          className={classes.formControl}
        >
          <InputLabel id='demo-simple-select-outlined-label'>
            Frequency
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={select}
            onChange={handleChange}
            label='Frequency'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button
          size='small'
          variant='contained'
          color='primary'
          className={classes.submitButton}
        >
          save
        </Button>
      </div>
    </Paper>
  );
}

export default ClientLifestylePresc;
