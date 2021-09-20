import {createStore,applyMiddleware} from 'redux'
import {reducer} from './reducer'
import {logger} from 'redux-logger'
//applying logger middleware to view logging
const Res_store = createStore(reducer,applyMiddleware(logger))
export default Res_store;
