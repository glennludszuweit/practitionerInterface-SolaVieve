import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import PrintIcon from '@material-ui/icons/Print';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

function ClientProgressNotes() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.pageTopButtons}>
        <div>
          <IconButton>
            <ArrowBackOutlinedIcon fontSize='small' />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PrintIcon fontSize='small' />
          </IconButton>
        </div>
      </div>
      <Paper variant='outlined' className={classes.paper}>
        <div className={classes.header}>
          <h2>Information of client</h2>
          <div>
            <IconButton>
              <Link to='/'>
                <SwapVertIcon />
              </Link>
            </IconButton>
          </div>
        </div>
        <TableContainer className={classes.table}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableHead}>
                <TableCell>Date</TableCell>
                <TableCell>Practitioner</TableCell>
                <TableCell>Profession</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05.02.2021</TableCell>
                <TableCell>Cameron Williams</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  culpa fugiat libero delectus molestias rem possimus facilis
                  dolore unde ipsam?
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default ClientProgressNotes;
