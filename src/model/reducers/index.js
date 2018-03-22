import {combineReducers} from 'redux';
import selected from './tabs'
import userInfo from './login'
import subscriptions from './subscriptions'
import trialCars from './trialCars'
import sales from './sales'

let reducers = combineReducers({
    selected,
    userInfo,
    subscriptions,
    trialCars,
    sales
});

export default reducers;
