import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import 'normalize-css/normalize.css';

import './index.scss';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { initGameReducer } from './store/reducers/init-game';
import { submitAnswerReducer } from './store/reducers/submit-answer';

const rootReducer = combineReducers({
    initGame: initGameReducer,
    submitAnswer: submitAnswerReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
