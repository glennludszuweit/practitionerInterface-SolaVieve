import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';

function Auth() {
  return (
    <Switch>
      <Route exact path='/auth/login' component={Login} />
      <Route exact path='/auth/register' component={Register} />
      <Redirect to='/auth/login' />
    </Switch>
  );
}

export default Auth;
