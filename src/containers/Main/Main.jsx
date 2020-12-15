import { Redirect, Route, Switch } from 'react-router-dom';

function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  );
}

export default Main;
