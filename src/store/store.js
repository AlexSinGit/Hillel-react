import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import {contactListReducer} from './ContactList';
import {contactFormReducer} from './ContactFrom';

const reducer = combineReducers({
  contactList: contactListReducer,
  contactForm: contactFormReducer
});

const middleware = applyMiddleware(reduxThunk);

export const store = createStore(reducer, middleware);