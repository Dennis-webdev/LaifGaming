//@ flow
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './reset.css.js';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
import Loadable from 'react-loadable';

const Pages = Loadable({
  loader: () => import('./views/pages'),
  loading: ({ isLoading }) => isLoading && null,
});

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Pages} />
          <Route path="/about" component={Pages} />
          <Route path="/contact" component={Pages} />
          <Route path="/support" component={Pages} />
          <Route path="/faq" component={Pages} />
          <Route path="/terms" component={Pages} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
