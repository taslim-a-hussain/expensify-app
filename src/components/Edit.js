import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const Edit = props => {

    return (
    <div>
        <h2>Edit</h2>
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
            props.dispatch(editExpense(props.match.params.id, expense));
            // Redirect to the dashboard page
            props.history.push('/');
        }} 
        />
        <button onClick={() => {
            props.dispatch(removeExpense({id: props.match.params.id}));
            // Redirect to the dashboard page
            props.history.push('/');
        }}>Remove</button>
    </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(Edit);