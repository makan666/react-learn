import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './model';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TrialCars from './components/TrialCars/TrialCars';
import Tabs from './components/Tabs/Tabs';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Tabs}/>
                        <Route exact path="/trial-cars" component={TrialCars}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// 热替换HMR，需要加入这段代码才会进行生效
if (module.hot) {
    module.hot.accept();
}
