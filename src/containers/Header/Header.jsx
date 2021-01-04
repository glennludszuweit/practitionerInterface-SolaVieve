import clsx from 'clsx';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';

function Header({ open, setOpen }) {
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();
  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Practitioners Interface
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
