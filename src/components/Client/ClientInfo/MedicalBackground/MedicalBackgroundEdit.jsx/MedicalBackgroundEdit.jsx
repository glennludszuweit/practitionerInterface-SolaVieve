import {
  FormControl,
  MenuItem,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Select,
  FormGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { useStyles } from './styles';

function MedicalBackgroundEdit() {
  const classes = useStyles();

  return (
    <TableBody>
      <TableRow>
        <TableCell style={{ width: '30%' }} component='th' scope='row'>
          Name
        </TableCell>
        <TableCell>
          <TextField
            variant='outlined'
            size='small'
            value='Roberta Fox'
            className={classes.inputFields}
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            disabled
          />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Age
        </TableCell>
        <TableCell>
          <TextField
            variant='outlined'
            size='small'
            defaultValue='28'
            className={classes.inputFields}
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
          />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Identification number
        </TableCell>
        <TableCell>
          <TextField
            variant='outlined'
            size='small'
            defaultValue='01234567'
            className={classes.inputFields}
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
          />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Sexual characteristics
          <br />
          <br />
          <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Biological sex</TableRow>
          <br />
          <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Gender identity</TableRow>
          <br />
          <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Sexual orientation</TableRow>
        </TableCell>
        <TableCell>
          <br />
          <br />
          <TableRow>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.inputFields}
            >
              <Select defaultValue='Female' className={classes.resize}>
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Intersex'>Intersex</MenuItem>
              </Select>
            </FormControl>
          </TableRow>
          <br />
          <TableRow>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.inputFields}
            >
              <Select defaultValue='Cisgender' className={classes.resize}>
                <MenuItem value='Transgender'>Transgender</MenuItem>
                <MenuItem value='Two-Spirit'>Two-Spirit</MenuItem>
                <MenuItem value='Cisgender'>Cisgender</MenuItem>
                <MenuItem value='Non-binary'>Non-binary</MenuItem>
                <MenuItem value='Genderqueer'>Genderqueer</MenuItem>
                <MenuItem value='Gender fluid'>Gender fluid</MenuItem>
                <MenuItem value='Gender neutral'>Gender neutral</MenuItem>
              </Select>
            </FormControl>
          </TableRow>
          <br />
          <TableRow>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.inputFields}
            >
              <Select defaultValue='Heterosexual' className={classes.resize}>
                <MenuItem value='Heterosexual'>Heterosexual</MenuItem>
                <MenuItem value='Homosexual'>Homosexual</MenuItem>
                <MenuItem value='Pansexual'>Pansexual</MenuItem>
                <MenuItem value='Bisexual'>Bisexual</MenuItem>
                <MenuItem value='Lesbian'>Lesbian</MenuItem>
                <MenuItem value='Gay'>Gay</MenuItem>
                <MenuItem value='Demisexual'>Demisexual</MenuItem>
                <MenuItem value='Questioning'>Questioning</MenuItem>
                <MenuItem value='Asexual'>Asexual</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
              </Select>
            </FormControl>
          </TableRow>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Marital status
        </TableCell>
        <TableCell>
          <FormControl
            variant='outlined'
            size='small'
            className={classes.inputFields}
          >
            <Select defaultValue='Single' className={classes.resize}>
              <MenuItem value='Single'>Single</MenuItem>
              <MenuItem value='Married'>Married</MenuItem>
              <MenuItem value='Widowed'>Widowed</MenuItem>
              <MenuItem value='Dicorced'>Dicorced</MenuItem>
              <MenuItem value='Separated'>Separated</MenuItem>
              <MenuItem value='Registered Partnership'>
                Registered Partnership
              </MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Place of origin
        </TableCell>
        <TableCell>
          <FormControl
            variant='outlined'
            size='small'
            className={classes.inputFields}
          >
            <Select defaultValue='Germany' className={classes.resize}>
              <MenuItem value='Germany'>Germany</MenuItem>
              <MenuItem value='Switzerland'>Switzerland</MenuItem>
              <MenuItem value='Netherland'>Netherland</MenuItem>
              <MenuItem value='France'>France</MenuItem>
              <MenuItem value='England'>England</MenuItem>
              <MenuItem value='Austria'>Austria</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Place of residence
        </TableCell>
        <TableCell>
          <FormControl
            variant='outlined'
            size='small'
            className={classes.inputFields}
          >
            <Select defaultValue='Germany' className={classes.resize}>
              <MenuItem value='Germany'>Germany</MenuItem>
              <MenuItem value='Switzerland'>Switzerland</MenuItem>
              <MenuItem value='Netherland'>Netherland</MenuItem>
              <MenuItem value='France'>France</MenuItem>
              <MenuItem value='England'>England</MenuItem>
              <MenuItem value='Austria'>Austria</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Ethnicity
        </TableCell>
        <TableCell>
          <FormControl
            variant='outlined'
            size='small'
            className={classes.inputFields}
          >
            <Select defaultValue='Hispanic' className={classes.resize}>
              <MenuItem value='American Indian / Alaska Native'>
                American Indian / Alaska Native
              </MenuItem>
              <MenuItem value='Hispanic'>American</MenuItem>
              <MenuItem value='Hispanic'>Hispanic / Latino</MenuItem>
              <MenuItem value='Asian'>Asian</MenuItem>
              <MenuItem value='White'>White</MenuItem>
              <MenuItem value='Black'>Black / African</MenuItem>
              <MenuItem value='Islander'>Islander</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Religion
        </TableCell>
        <TableCell>
          <FormControl
            variant='outlined'
            size='small'
            className={classes.inputFields}
          >
            <Select defaultValue='None' className={classes.resize}>
              <MenuItem value='None'>None</MenuItem>
              <MenuItem value='Christian'>Christianity</MenuItem>
              <MenuItem value='Islam'>Islam</MenuItem>
              <MenuItem value='Hindu'>Hinduism</MenuItem>
              <MenuItem value='Buddhist'>Buddhism</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell component='th' scope='row'>
          Work
          <br />
          <br />
          <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Profession</TableRow>
          <br />
          <TableRow>
            &nbsp;&nbsp;&nbsp;&nbsp; Does occupation match the profession?
          </TableRow>
        </TableCell>
        <TableCell>
          <br />
          <br />
          <TableRow>
            <TextField
              variant='outlined'
              size='small'
              defaultValue='Teacher'
              className={classes.inputFields}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            />
          </TableRow>
          <br />
          <TableRow>
            <FormGroup row>
              <RadioGroup
                row
                className={classes.inputFields}
                style={{ marginRight: -100 }}
              >
                <FormControlLabel
                  value='yes'
                  control={<Radio color='primary' size='small' />}
                  label='Yes'
                />
                <FormControlLabel
                  value='no'
                  control={<Radio color='primary' size='small' />}
                  label='No'
                />
              </RadioGroup>
              <TextField
                variant='outlined'
                size='small'
                defaultValue='28'
                className={classes.inputFields}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
              />
            </FormGroup>
          </TableRow>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default MedicalBackgroundEdit;
