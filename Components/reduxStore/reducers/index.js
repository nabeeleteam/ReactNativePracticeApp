import counterReducer from './counter'
import appHeaderLabelReducer from  './appHeaderLable'
import cameraIcon from './camera'
import { combineReducers } from 'redux'


const reducers = combineReducers({
    counter: counterReducer,
    appHeaderLable: appHeaderLabelReducer,
    cameraIcon
})

export default reducers