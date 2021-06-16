import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './screens/Home';
import Example1 from './screens/Example1';
import Example2 from './screens/Example2';
import Example3 from './screens/Example3';

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={Home} />
    <Route exact path="/example-1" component={Example1} />
    <Route exact path="/example-2" component={Example2} />
    <Route exact path="/example-3" component={Example3} />
    <Redirect to="/" />
  </Switch>
);

const mapStateToProps = ({ router }) => ({ location: router.location });

export default connect(mapStateToProps)(Routes);
