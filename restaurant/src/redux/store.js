import {createStore} from 'redux'
import {reducer} from './reducer'

const Res_store = createStore(reducer)
export default Res_store;
