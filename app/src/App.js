import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;