import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'normalize-css/normalize.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';

import './index.scss';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { wordsReducer } from './store/reducers/words';
import { answerReducer } from './store/reducers/answer';
import { allWordsReducer } from './store/reducers/all-words';

const rootReducer = combineReducers({
    allWords: allWordsReducer,
    words: wordsReducer,
    answer: answerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
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
