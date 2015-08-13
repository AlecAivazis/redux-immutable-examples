import {
    createStore,
    applyMiddleware
} from 'redux';

import {
     combineReducers
} from 'redux-immutable';

import thunk from 'redux-thunk';
import logger from './middleware/logger'

import * as reducers from './reducers';

import Immutable from 'immutable';

import _ from 'lodash';

let reducer,
    store,
    state = {};

state.tasks = [
    {
        id: _.uniqueId(),
        name: 'a',
        done: false
    },
    {
        id: _.uniqueId(),
        name: 'c',
        done: false
    },
    {
        id: _.uniqueId(),
        name: 'c',
        done: false
    }
];

reducer = combineReducers(reducers);
store = applyMiddleware(thunk, logger)(createStore)(reducer, Immutable.fromJS(state));

export default store;