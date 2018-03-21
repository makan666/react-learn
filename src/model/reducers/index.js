import {combineReducers} from 'redux';
import login from './login'
import subscriptions from './subscriptions'
import trialCars from './trialCars'
import sales from './sales'

let reducers = combineReducers({
    login,
    subscriptions,
    trialCars,
    sales
});

export default reducers;
