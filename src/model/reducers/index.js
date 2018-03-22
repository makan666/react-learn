import {combineReducers} from 'redux';
import userInfo from './login'
import subscriptions from './subscriptions'
import trialCars from './trialCars'
import sales from './sales'

let reducers = combineReducers({
    userInfo,
    subscriptions,
    trialCars,
    sales
});

export default reducers;
