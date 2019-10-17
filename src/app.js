import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import AppRouter from './router/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 15000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 5000, createdAt: 5000}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));