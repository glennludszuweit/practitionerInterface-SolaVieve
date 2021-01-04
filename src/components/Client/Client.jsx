import ClientOverview from './ClientOverview/ClientOverview';
import { Grid, IconButton } from '@material-ui/core';
import { useStyles } from './styles';
import PrintIcon from '@material-ui/icons/Print';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ClientInfoOverview from './ClientInfoOverview/ClientInfoOverview';
import ClientHealthTrack from './ClientHealtTrack/ClientHealtTrack';
import ClientProgressNotes from './ClientProgressNotes/ClientProgressNotes';
import ClientLifestylePresc from './ClientLifestylePresc/ClientLifestylePresc';

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
          <ClientHealthTrack />
          <ClientProgressNotes />
          <ClientLifestylePresc />
        </Grid>
      </Grid>
    </div>
  );
}

export default Client;
