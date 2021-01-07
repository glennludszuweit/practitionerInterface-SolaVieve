import { useStyles, bootstrapInput } from './styles';
import {
  Button,
  Divider,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  NativeSelect,
  Paper,
  Select,
} from '@material-ui/core';
import { useState } from 'react';

function ClientLifestylePresc() {
  const classes = useStyles();

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
      <FormControl className={classes.margin}>
        <InputLabel htmlFor='demo-customized-select-native'>Age</InputLabel>
        <NativeSelect
          id='demo-customized-select-native'
          value={age}
          onChange={handleChange}
          input={<bootstrapInput />}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
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

export default ClientLifestylePresc;
