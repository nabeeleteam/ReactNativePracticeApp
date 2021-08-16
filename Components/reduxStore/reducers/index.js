import counterReducer from './counter'
import appHeaderLabelReducer from  './appHeaderLable'

import { combineReducers } from 'redux'


const reducers = combineReducers({
    counter: counterReducer,
    appHeaderLable: appHeaderLabelReducer
})

export default reducers