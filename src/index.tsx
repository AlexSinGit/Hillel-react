import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './core/store';
import Root from './pages/Root';
import {initAPI} from './core/api';

initAPI({tokenID: '6015c49055dfbd00174ca8ec'});

ReactDOM.render(
  // <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </ReduxProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
