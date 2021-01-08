import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ClientInfo() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <div>
            <Button
              className={classes.editButton}
              size='small'
              variant='contained'
              color='primary'
            >
              edit
            </Button>
          </div>
        </div>
        <div className={classes.tabsRoot}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
          >
            <Tab
              className={classes.tabsLabel}
              label='Personal information'
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tabsLabel}
              label='Medical background'
              {...a11yProps(1)}
            />
            <Tab
              className={classes.tabsLabel}
              label='Family medical background'
              {...a11yProps(2)}
            />
            <Tab
              className={classes.tabsLabel}
              label='Lifestyle and habits'
              {...a11yProps(3)}
            />
            <Tab
              className={classes.tabsLabel}
              label='Allergies'
              {...a11yProps(4)}
            />
            <Tab
              className={classes.tabsLabel}
              label='Test results'
              {...a11yProps(5)}
            />
          </Tabs>
          <div className={classes.tabsContent}>
            <TabPanel value={value} index={0}>
              Personal information
            </TabPanel>
            <TabPanel value={value} index={1}>
              Medical background
            </TabPanel>
            <TabPanel value={value} index={2}>
              Family medical background
            </TabPanel>
            <TabPanel value={value} index={3}>
              Lifestyle and habits
            </TabPanel>
            <TabPanel value={value} index={4}>
              Allergies
            </TabPanel>
            <TabPanel value={value} index={5}>
              Test results
            </TabPanel>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default ClientInfo;
