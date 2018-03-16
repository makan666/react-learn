import {combineReducers} from 'redux';
import login from './login'
import trialCars from './trialCars'
import subscriptions from './subscriptions'

let reducers = combineReducers({
    login,
    trialCars,
    subscriptions
});

export default reducers;
