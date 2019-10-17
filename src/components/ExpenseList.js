import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2> 
        {props.expenses.map((expense, key) => <ExpenseListItem key={key} {...expense}/>)}
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};


/**
 * Pass the mapStateToProps function to the connect function then
 * Connect ExpenseList (component) to the store
 */
export default connect(mapStateToProps)(ExpenseList);