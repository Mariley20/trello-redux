import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux-zero/react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import store from "./store";
import App from './App';
import SignIn from '../SignIn.js';
import SignIn from '../SignUp.js';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/" component={SignUp} />
                    <Route path="/sign_up" component={SignUp} />
                    <Route path="/sign_in" component={SignIn} />
            </Switch>
        </HashRouter>
    </Provider>
);
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();