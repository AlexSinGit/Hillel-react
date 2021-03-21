import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';

import Users from '../Users';
import Albums from '../Albums';
import {Header} from '../../components/Header';
import Album from '../Album';
import PhotoViewer from '../Photo';

export function Root() {
  return (
      <div>
        <Header/>
        <Container>
          <Switch>
            <Route path="/" exact component={Users}/>
            <Route path="/albums" component={Albums}/>
            <Route path="/album/:id" component={Album}/>
            <Route path="/photo/:id" component={PhotoViewer}/>
          </Switch>
        </Container>
      </div>
  );
}

export default Root;