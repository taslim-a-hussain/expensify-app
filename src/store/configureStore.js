import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {
    /*
    * Create Store - createStore
    * @param (Callback Function) expensesReducer or combineReducers
    */
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
};