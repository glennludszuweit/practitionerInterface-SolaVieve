import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useStyles } from './styles';

function Aspect({ dimension, handleAspectChange, aspect }) {
  const classes = useStyles();

  return (
    <FormControl
      size='small'
      variant='outlined'
      className={classes.formControl}
    >
      <InputLabel>Aspect</InputLabel>
      {dimension === 'Physical' ? (
        <Select value={aspect} onChange={handleAspectChange} label='Aspect'>
          <MenuItem value='Sleep & Rest'>Sleep & Rest</MenuItem>
          <MenuItem value='Movement'>Movement</MenuItem>
          <MenuItem value='Sexuality'>Sexuality</MenuItem>
          <MenuItem value='Skin'>Skin</MenuItem>
          <MenuItem value='Chronic Disease'>Chronic Disease</MenuItem>
          <MenuItem value='Genetics'>Genetics</MenuItem>
          <MenuItem value='Pregnancy'>Pregnancy</MenuItem>
          <MenuItem value='Allergies'>Allergies</MenuItem>
          <MenuItem value='Medical Self-Care'>Medical Self-Care</MenuItem>
        </Select>
      ) : dimension === 'Mental' ? (
        <Select value={aspect} onChange={handleAspectChange} label='Aspect'>
          <MenuItem value='Individual Attributes'>
            Individual Attributes
          </MenuItem>
          <MenuItem value='Social Circumstances'>Social Circumstances</MenuItem>
          <MenuItem value='Environmental Factors'>
            Environmental Factors
          </MenuItem>
          <MenuItem value='Stress Management'>Stress Management</MenuItem>
          <MenuItem value='Substance Use'>Substance Use</MenuItem>
          <MenuItem value='Discrimination'>Discrimination</MenuItem>
          <MenuItem value='Relax'>Relax</MenuItem>
        </Select>
      ) : dimension === 'Spiritual' ? (
        <Select value={aspect} onChange={handleAspectChange} label='Aspect'>
          <MenuItem value='Existencial Wellbeing'>
            Existencial Wellbeing
          </MenuItem>
          <MenuItem value='Personal Wellbeing'>Personal Wellbeing</MenuItem>
        </Select>
      ) : dimension === 'Social' ? (
        <Select value={aspect} onChange={handleAspectChange} label='Aspect'>
          <MenuItem value='Social Intelegence'>Social Intelegence</MenuItem>
          <MenuItem value='Social Relationships'>Social Relationships</MenuItem>
          <MenuItem value='Upbringing'>Upbringing</MenuItem>
        </Select>
      ) : dimension === 'Environmental' ? (
        <Select value={aspect} onChange={handleAspectChange} label='Aspect'>
          <MenuItem value='Ambient Air'>Ambient Air</MenuItem>
          <MenuItem value='Noise Pollution'>Noise Pollution</MenuItem>
          <MenuItem value='Security'>Security</MenuItem>
          <MenuItem value='House Environment'>House Environment</MenuItem>
          <MenuItem value='Water'>Water</MenuItem>
          <MenuItem value='Harmful Substances'>Harmful Substances</MenuItem>
          <MenuItem value='Neighbourhood'>Neighbourhood</MenuItem>
          <MenuItem value='Environmental Concerns'>
            Environmental Concerns
          </MenuItem>
          <MenuItem value='Substainable Wellbeing'>
            Substainable Wellbeing
          </MenuItem>
          <MenuItem value='Clean Energies'>Clean Energies</MenuItem>
          <MenuItem value='Travel'>Travel</MenuItem>
        </Select>
      ) : dimension === 'Economic' ? (
        <Select value={aspect} onChange={handleAspectChange} label='Aspect'>
          <MenuItem value='Employment'>Employment</MenuItem>
          <MenuItem value='Education'>Education</MenuItem>
          <MenuItem value='Finances'>Finances</MenuItem>
          <MenuItem value='Health Coverage'>Health Coverage</MenuItem>
          <MenuItem value='Social Networks'>Social Networks</MenuItem>
        </Select>
      ) : (
        <Select value={aspect} onChange={handleAspectChange} label='Aspect'>
          <MenuItem value='Sleep & Rest'>Sleep & Rest</MenuItem>
          <MenuItem value='Movement'>Movement</MenuItem>
          <MenuItem value='Sexuality'>Sexuality</MenuItem>
          <MenuItem value='Skin'>Skin</MenuItem>
          <MenuItem value='Chronic Disease'>Chronic Disease</MenuItem>
          <MenuItem value='Genetics'>Genetics</MenuItem>
          <MenuItem value='Pregnancy'>Pregnancy</MenuItem>
          <MenuItem value='Allergies'>Allergies</MenuItem>
          <MenuItem value='Medical Self-Care'>Medical Self-Care</MenuItem>
          <MenuItem value='Individual Attributes'>
            Individual Attributes
          </MenuItem>
          <MenuItem value='Social Circumstances'>Social Circumstances</MenuItem>
          <MenuItem value='Environmental Factors'>
            Environmental Factors
          </MenuItem>
          <MenuItem value='Stress Management'>Stress Management</MenuItem>
          <MenuItem value='Substance Use'>Substance Use</MenuItem>
          <MenuItem value='Discrimination'>Discrimination</MenuItem>
          <MenuItem value='Relax'>Relax</MenuItem>
          <MenuItem value='Existencial Wellbeing'>
            Existencial Wellbeing
          </MenuItem>
          <MenuItem value='Personal Wellbeing'>Personal Wellbeing</MenuItem>
          <MenuItem value='Social Intelegence'>Social Intelegence</MenuItem>
          <MenuItem value='Social Relationships'>Social Relationships</MenuItem>
          <MenuItem value='Upbringing'>Upbringing</MenuItem>
          <MenuItem value='Ambient Air'>Ambient Air</MenuItem>
          <MenuItem value='Noise Pollution'>Noise Pollution</MenuItem>
          <MenuItem value='Security'>Security</MenuItem>
          <MenuItem value='House Environment'>House Environment</MenuItem>
          <MenuItem value='Water'>Water</MenuItem>
          <MenuItem value='Harmful Substances'>Harmful Substances</MenuItem>
          <MenuItem value='Neighbourhood'>Neighbourhood</MenuItem>
          <MenuItem value='Environmental Concerns'>
            Environmental Concerns
          </MenuItem>
          <MenuItem value='Substainable Wellbeing'>
            Substainable Wellbeing
          </MenuItem>
          <MenuItem value='Clean Energies'>Clean Energies</MenuItem>
          <MenuItem value='Travel'>Travel</MenuItem>
          <MenuItem value='Employment'>Employment</MenuItem>
          <MenuItem value='Education'>Education</MenuItem>
          <MenuItem value='Finances'>Finances</MenuItem>
          <MenuItem value='Health Coverage'>Health Coverage</MenuItem>
          <MenuItem value='Social Networks'>Social Networks</MenuItem>
        </Select>
      )}
    </FormControl>
  );
}

export default Aspect;
