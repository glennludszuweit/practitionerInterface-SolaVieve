import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { useState } from 'react';
import { useStyles } from './styles';
import MedicalBackgroundEdit from './MedicalBackgroundEdit.jsx/MedicalBackgroundEdit';

function MedicalBackground() {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div>
      <div className={classes.tabHeader}>
        <h2>Medical background</h2>
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
      <div className={classes.root}>
        <TableContainer className={classes.tableContainer}>
          <Table>
            {openEdit ? (
              <MedicalBackgroundEdit />
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell
                    style={{ width: '30%' }}
                    component='th'
                    scope='row'
                  >
                    Medication
                    <br />
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Medicine name</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Generic name</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Dose</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Start date</TableRow>
                  </TableCell>
                  <TableCell>
                    yes
                    <br />
                    <br />
                    <TableRow>Panadol</TableRow>
                    <br />
                    <TableRow>Paracetamol</TableRow>
                    <br />
                    <TableRow>250mg 3x a day</TableRow>
                    <br />
                    <TableRow>22/12/2020</TableRow>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component='th' scope='row'>
                    Supplement
                    <br />
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Supplement name
                    </TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Generic name</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Dose</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Start date</TableRow>
                  </TableCell>
                  <TableCell>
                    yes
                    <br />
                    <br />
                    <TableRow>iHerb</TableRow>
                    <br />
                    <TableRow>Multivitamins</TableRow>
                    <br />
                    <TableRow>500mg 4x a day</TableRow>
                    <br />
                    <TableRow>22/12/2020</TableRow>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component='th' scope='row'>
                    Current Illness
                    <br />
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Illness</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Started</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Treatment</TableRow>
                  </TableCell>
                  <TableCell>
                    <br />
                    <br />
                    <TableRow>Chest pain</TableRow>
                    <br />
                    <TableRow>22/12/2020</TableRow>
                    <br />
                    <TableRow>yes</TableRow>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component='th' scope='row'>
                    Previous Illness
                    <br />
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Illness</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Started</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Treatment</TableRow>
                  </TableCell>
                  <TableCell>
                    <br />
                    <br />
                    <TableRow>Migrane</TableRow>
                    <br />
                    <TableRow>18/06/2013</TableRow>
                    <br />
                    <TableRow>yes</TableRow>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component='th' scope='row'>
                    Previous surgeries
                    <br />
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Surgery</TableRow>
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Surgery date</TableRow>
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Treatment ongoing
                    </TableRow>
                  </TableCell>
                  <TableCell>
                    yes
                    <br />
                    <br />
                    <TableRow>Brain surgery</TableRow>
                    <br />
                    <TableRow>28/04/2010</TableRow>
                    <br />
                    <TableRow>yes</TableRow>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component='th' scope='row'>
                    Traumatologica / Injuries
                    <br />
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Date of Incident
                    </TableRow>
                  </TableCell>
                  <TableCell>
                    yes
                    <br />
                    <br />
                    <TableRow>30/02/1999</TableRow>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component='th' scope='row'>
                    Allergies
                    <br />
                    <br />
                    <TableRow>&nbsp;&nbsp;&nbsp;&nbsp; Allergies with</TableRow>
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Allergies reaction
                    </TableRow>
                  </TableCell>
                  <TableCell>
                    <br />
                    <br />
                    <TableRow>Medication, Food</TableRow>
                    <br />
                    <TableRow>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos, esse.
                    </TableRow>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component='th' scope='row'>
                    Immunizations
                    <br />
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Vacine and Vacination date
                    </TableRow>
                  </TableCell>
                  <TableCell>
                    yes
                    <br />
                    <br />
                    <TableRow>Meningitis - 21/03/1992</TableRow>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component='th' scope='row'>
                    Obstetric and Gynecological (Womens)
                    <br />
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Menstrual cycles regularity
                    </TableRow>
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Menstrual cycles abundance
                    </TableRow>
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Current pregnancy
                    </TableRow>
                    <br />
                    <TableRow>
                      &nbsp;&nbsp;&nbsp;&nbsp; Previous pregnancy
                    </TableRow>
                  </TableCell>
                  <TableCell>
                    <br />
                    <br />
                    <TableRow>Regular</TableRow>
                    <br />
                    <TableRow>Normal</TableRow>
                    <br />
                    <TableRow>no</TableRow>
                    <br />
                    <TableRow>no</TableRow>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default MedicalBackground;
