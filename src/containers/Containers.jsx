import { CssBaseline } from '@material-ui/core';
import { useStyles } from './styles';
import Aside from './Aside/Aside';
import Header from './Header/Header';
import Main from './Main/Main';
import { useState } from 'react';

function Containers() {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} />
      <Aside open={open} setOpen={setOpen} />
      <Main open={open} />
    </div>
  );
}

export default Containers;
