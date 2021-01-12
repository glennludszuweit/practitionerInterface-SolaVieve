import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useStyles } from './styles';

function Dimension({ dimension, handleDimensionChange, aspect }) {
  const classes = useStyles();

  return (
    <FormControl
      size='small'
      variant='outlined'
      className={classes.formControl}
    >
      <InputLabel>Dimension</InputLabel>

      <Select
        value={
          dimension
            ? dimension
            : aspect === 'Sleep & Rest' ||
              aspect === 'Movement' ||
              aspect === 'Sexuality' ||
              aspect === 'Skin' ||
              aspect === 'Chronic Disease' ||
              aspect === 'Genetics' ||
              aspect === 'Pregnancy' ||
              aspect === 'Allergies' ||
              aspect === 'Medical Self-Care'
            ? 'Physical'
            : aspect === 'Individual Attributes' ||
              aspect === 'Social Circumstances' ||
              aspect === 'Environmental Factors' ||
              aspect === 'Stress Management' ||
              aspect === 'Substance Use' ||
              aspect === 'Discrimination' ||
              aspect === 'Relax'
            ? 'Mental'
            : aspect === 'Existencial Wellbeing' ||
              aspect === 'Personal Wellbeing'
            ? 'Spiritual'
            : aspect === 'Social Intelegence' ||
              aspect === 'Social Relationships' ||
              aspect === 'Upbringing'
            ? 'Social'
            : aspect === 'Ambient Air' ||
              aspect === 'Noise Pollution' ||
              aspect === 'Security' ||
              aspect === 'House Environment' ||
              aspect === 'Water' ||
              aspect === 'Harmful Substances' ||
              aspect === 'Neighbourhood' ||
              aspect === 'Environmental Concerns' ||
              aspect === 'Substainable Wellbeing' ||
              aspect === 'Clean Energies' ||
              aspect === 'Travel'
            ? 'Environmental'
            : aspect === 'Employment' ||
              aspect === 'Education' ||
              aspect === 'Finances' ||
              aspect === 'Health Coverage' ||
              aspect === 'Social Networks'
            ? 'Economic'
            : dimension
        }
        onChange={handleDimensionChange}
        label='Dimension'
      >
        <MenuItem value='Physical'>Physical</MenuItem>
        <MenuItem value='Mental'>Mental</MenuItem>
        <MenuItem value='Spiritual'>Spiritual</MenuItem>
        <MenuItem value='Social'>Social</MenuItem>
        <MenuItem value='Environmental'>Environmental</MenuItem>
        <MenuItem value='Economic'>Economic</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Dimension;
