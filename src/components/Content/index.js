import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {About} from '../About';
import {Home} from '../Home';
import Contacts from '../Contacts';

class Content extends React.Component{
  render() {
    return (
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route path="/contacts" component={Contacts} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
    )
  }
}

export default Content;