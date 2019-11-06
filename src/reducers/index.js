import { combineReducers } from 'redux';
import errReducer from './errReducer'
import authReducer from './authReducer'
import gameSetting from './GameCaro/gameSetting';
import history from './GameCaro/history';

import step from './GameCaro/step';
import playerNext from './GameCaro/playerNext';
import autoClickSquare from './GameCaro/autoClickSquare'

const myReducer =  combineReducers({
    error:errReducer,
    auth: authReducer,
    gameSetting,
    history,
    step,
    playerNext,
    autoClickSquare
})

export default myReducer;