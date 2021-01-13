import { useStyles } from './styles';
import { Button, Divider, Paper } from '@material-ui/core';
import { useState } from 'react';
import Dimension from './Dimension/Dimension';
import Aspect from './Aspect/Aspect';
import Prescription from './Prescription/Prescription';
import Frequency from './Frequency/Frequency';
import { Link } from 'react-router-dom';

function ClientLifestylePresc() {
  const classes = useStyles();
  const [dimension, setDimension] = useState('');
  const [aspect, setAspect] = useState('');
  const [prescription, setPrescription] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleDimensionChange = (e) => {
    setDimension(e.target.value);
  };

  const handleAspectChange = (e) => {
    setAspect(e.target.value);
  };

  const handlePrescriptionChange = (e) => {
    setPrescription(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  return (
    <Paper variant='outlined' className={classes.paper}>
      <div className={classes.header}>
        <div>Lifestyle prescriptions</div>
        <div>
          <Button size='small' variant='outlined' color='primary'>
            <Link to='/client/lifestyle-presc'>history</Link>
          </Button>
        </div>
      </div>
      <Divider />

      <div className={classes.formContainer}>
        <div className={classes.dropdownContainer}>
          <Dimension
            dimension={dimension}
            handleDimensionChange={handleDimensionChange}
            aspect={aspect}
          />
          <Aspect
            aspect={aspect}
            handleAspectChange={handleAspectChange}
            dimension={dimension}
          />
          <Prescription handlePrescriptionChange={handlePrescriptionChange} />
          <Frequency
            frequency={frequency}
            handleFrequencyChange={handleFrequencyChange}
          />
        </div>
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
