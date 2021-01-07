import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import DetailsIcon from '@material-ui/icons/Details';

function createData(statements, weight, answers) {
  return { statements, weight, answers };
}

const rows = [
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
  createData(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati magni ipsum labore eos quibusdam.',
    'Medium',
    'Agree'
  ),
];

function ClientHealthTrackOverview() {
  const classes = useStyles();

  return (
    <Paper variant='outlined' className={classes.paper}>
      <div className={classes.header}>
        <div>Health tracking information</div>
        <div>
          <IconButton size='small'>
            <Link to='/'>
              <DetailsIcon />
            </Link>
          </IconButton>
          <IconButton size='small'>
            <Link to='/'>
              <AccessTimeIcon />
            </Link>
          </IconButton>
          <IconButton size='small'>
            <Link to='/'>
              <SwapVertIcon />
            </Link>
          </IconButton>
        </div>
      </div>
      <Divider />
      <Grid container>
        <Grid item xs={5} className={classes.infoChartSection}>
          <div className={classes.wqScore}>
            <div>112</div>
            <small>WQ score</small>
          </div>
        </Grid>
        <Grid item xs={7} className={classes.infoTableSection}>
          <TableContainer className={classes.infoTable}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Statements</TableCell>
                  <TableCell align='right'>Weight</TableCell>
                  <TableCell align='right'>Answers</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component='th' scope='row'>
                      <small>{row.statements}</small>
                    </TableCell>
                    <TableCell align='right'>
                      <small>{row.weight}</small>
                    </TableCell>
                    <TableCell align='right'>
                      <small>{row.answers}</small>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={classes.readmoreButtonContainer}>
            <Button
              className={classes.readmoreButton}
              variant='contained'
              color='primary'
            >
              Read more
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ClientHealthTrackOverview;
