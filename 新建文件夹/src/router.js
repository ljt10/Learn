import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  console.log(app)
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage/IndexPage')
})
const Div1 = dynamic({
    app,
    component: () => import('./routes/Div1/Div1')
});
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/div1" exact component={Div1} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
