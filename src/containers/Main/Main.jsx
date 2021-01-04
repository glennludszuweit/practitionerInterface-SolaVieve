import { Redirect, Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import Auth from '../../components/Auth/Auth';
import Calendar from '../../components/Calendar/Calendar';
import Client from '../../components/Client/Client';
import Community from '../../components/Community/Community';
import Home from '../../components/Home/Home';
import Payment from '../../components/Payment/Payment';
import { useStyles } from './styles';

function Main({ open }) {
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/community' component={Community} />
        <Route path='/payment' component={Payment} />
        <Route path='/client' component={Client} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </main>
  );
}

export default Main;
