import {createStore,applyMiddleware} from 'redux'
import {reducer} from './reducer'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
//applying logger middleware to view logging
const Res_store = createStore(reducer,applyMiddleware(logger,thunk))
export default Res_store;
