import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import Calendar from '../../components/Calendar/Calendar';
import Client from '../../components/Client/Client';
import Community from '../../components/Community/Community';
import Home from '../../components/Home/Home';
import Payment from '../../components/Payment/Payment';

function Main() {
  return (
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/client' component={Client} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/community' component={Community} />
      <Route path='/payment' component={Payment} />
      <Route exact path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  );
}

export default Main;
