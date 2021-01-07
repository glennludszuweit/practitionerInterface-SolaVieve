import ClientOverview from './ClientOverview/ClientOverview';
import ClientInfoOverview from './ClientInfo/Overview/ClientInfoOverview';
import ClientHealthTrackOverview from './ClientHealtTrack/Overview/ClientHealthTrackOverview';
import ClientLifestylePrescOverview from './ClientLifestylePresc/Overview/ClientLifestylePrescOverview';
import ClientProgressNotesOverview from './ClientProgressNotes/Overview/ClientProgressNotesOverview';
import { Grid, IconButton } from '@material-ui/core';
import { useStyles } from './styles';
import PrintIcon from '@material-ui/icons/Print';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

function Client() {
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
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ClientOverview />
          <ClientInfoOverview />
        </Grid>
        <Grid item xs={8}>
          <ClientHealthTrackOverview />
          <ClientProgressNotesOverview />
          <ClientLifestylePrescOverview />
        </Grid>
      </Grid>
    </div>
  );
}

export default Client;
