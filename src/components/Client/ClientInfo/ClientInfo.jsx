import { Button, IconButton, Paper, Tab, Tabs } from '@material-ui/core';
import { useStyles } from './styles';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Link, Route, Switch } from 'react-router-dom';
import PersonalInfo from './PersonalInfo/PersonalInfo';

function ClientInfo() {
  const classes = useStyles();

  const allTabs = [
    '/client/info/personal-info',
    '/client/info/medical-background',
    '/client/info/family-medical-background',
    '/client/info/lifestyle-habits',
    '/client/info/allergies',
    '/client/info/test-results',
  ];

  return (
    <div className={classes.root}>
      <div className={classes.pageTopButtons}>
        <div>
          <IconButton>
            <ArrowBackOutlinedIcon fontSize='small' />
          </IconButton>
        </div>
      </div>
      <Paper variant='outlined' className={classes.paper}>
        <div className={classes.header}>
          <h2>Information of client</h2>
        </div>
        <div className={classes.tabsRoot}>
          <Route
            path='/'
            render={({ location }) => (
              <div>
                <Tabs
                  value={location.pathname}
                  indicatorColor='primary'
                  textColor='primary'
                  variant='fullWidth'
                >
                  <Tab
                    className={classes.tabsLabel}
                    label='Personal information'
                    value='/client/info/personal-info'
                    component={Link}
                    to={allTabs[0]}
                  />
                  <Tab
                    className={classes.tabsLabel}
                    label='Medical background'
                    value='/client/info/medical-background'
                    component={Link}
                    to={allTabs[1]}
                  />
                  <Tab
                    className={classes.tabsLabel}
                    label='Family medical background'
                    value='/client/info/family-medical-background'
                    component={Link}
                    to={allTabs[2]}
                  />
                  <Tab
                    className={classes.tabsLabel}
                    label='Lifestyle and habits'
                    value='/client/info/lifestyle-habits'
                    component={Link}
                    to={allTabs[3]}
                  />
                  <Tab
                    className={classes.tabsLabel}
                    label='Allergies'
                    value='/client/info/allergies'
                    component={Link}
                    to={allTabs[4]}
                  />
                  <Tab
                    className={classes.tabsLabel}
                    label='Test results'
                    value='/client/info/test-results'
                    component={Link}
                    to={allTabs[5]}
                  />
                </Tabs>
                <Switch>
                  <div className={classes.tabsContent}>
                    <Route path={allTabs[0]} render={() => <PersonalInfo />} />
                    <Route
                      path={allTabs[1]}
                      render={() => <div>Medical background</div>}
                    />
                    <Route
                      path={allTabs[2]}
                      render={() => <div>Family medical background</div>}
                    />
                    <Route
                      path={allTabs[3]}
                      render={() => <div>Lifestyle and habits</div>}
                    />
                    <Route
                      path={allTabs[4]}
                      render={() => <div>Allergies</div>}
                    />
                    <Route
                      path={allTabs[5]}
                      render={() => <div>Test results</div>}
                    />
                  </div>
                </Switch>
              </div>
            )}
          />
        </div>
      </Paper>
    </div>
  );
}

export default ClientInfo;
