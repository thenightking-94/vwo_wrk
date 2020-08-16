import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Home from './components/Home';


class App extends Component {

  render() {
    return (
      <div>
        <MetaTags>
          <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,
                user-scalable=no,target-densitydpi=device-dpi"/>
        </MetaTags>
        <Router>
          <Switch>

            <Route exact path='/' component={Home} />

          </Switch>
        </Router>





      </div>
    );
  }
}

export default App;
