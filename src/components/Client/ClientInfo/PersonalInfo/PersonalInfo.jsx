import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { useState } from 'react';
import PersonalInfoEdit from './PersonalInfoEdit/PersonalInfoEdit';
import { useStyles } from './styles';

function PersonalInfo() {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div>
      <div className={classes.tabHeader}>
        <h2>Personal Information</h2>
        <div>
          {openEdit ? (
            <Button
              className={classes.editButton}
              size='small'
              variant='contained'
              color='primary'
              onClick={() => setOpenEdit(false)}
            >
              save
            </Button>
          ) : (
            <Button
              className={classes.editButton}
              size='small'
              variant='contained'
              color='primary'
              onClick={() => setOpenEdit(true)}
            >
              edit
            </Button>
          )}
        </div>
      </div>

      <TableContainer className={classes.tableContainer}>
        <Table>
          {openEdit ? (
            <PersonalInfoEdit />
          ) : (
            <TableBody>
              <TableRow>
                <TableCell style={{ width: '30%' }} component='th' scope='row'>
                  Name
                </TableCell>
                <TableCell>Roberta Fox</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th' scope='row'>
                  Age
                </TableCell>
                <TableCell>28</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th' scope='row'>
                  Identification number
                </TableCell>
                <TableCell>28</TableCell>
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
                  <TableRow>
                    &nbsp;&nbsp;&nbsp;&nbsp; Sexual orientation
                  </TableRow>
                </TableCell>
                <TableCell>
                  <br />
                  <br />
                  <TableRow>Male</TableRow>
                  <br />
                  <TableRow>Cisgender</TableRow>
                  <br />
                  <TableRow>Heterosexual</TableRow>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th' scope='row'>
                  Marital status
                </TableCell>
                <TableCell>Single</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th' scope='row'>
                  Place of origin
                </TableCell>
                <TableCell>Germany</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th' scope='row'>
                  Place of residence
                </TableCell>
                <TableCell>Germany</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th' scope='row'>
                  Ethnicity
                </TableCell>
                <TableCell>Hispanic</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th' scope='row'>
                  Religion
                </TableCell>
                <TableCell>None</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th' scope='row'>
                  Work
                  <br />
                  <br />
                  <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Profession</TableRow>
                  <br />
                  <TableRow>
                    &nbsp;&nbsp;&nbsp;&nbsp; Does occupation match the
                    profession?
                  </TableRow>
                </TableCell>
                <TableCell>
                  <br />
                  <br />
                  <TableRow>Teacher</TableRow>
                  <br />
                  <TableRow>Yes</TableRow>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
}

export default PersonalInfo;
