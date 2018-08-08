import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
