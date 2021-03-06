import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './model';
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import TrialCars from './containner/TrialCars/TrialCars';
import Sales from './containner/Sales/Sales';
import Tabs from './containner/Tabs/Tabs';
import Login from './containner/Login/Login';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Tabs}></Route>
                        <Route path="/trial-cars" component={TrialCars}></Route>
                        <Route path="/sales" component={Sales}></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// 热替换HMR，需要加入这段代码才会进行生效
if (module.hot) {
    module.hot.accept();
}
