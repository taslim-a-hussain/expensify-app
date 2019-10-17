import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('removeExpense Action - for redux reducer', () => {
    const action = removeExpense({id: '125adf'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '125adf'
    });
});

test('editExpense Action - for redux reducer', () => {
    const id = '24abc';
    const updates = {note: 'Testing'};
    const action = editExpense(id, updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });
});

test('addExpense Action with provided value - for redux reducer', () => {
    const expense = {
        description: 'Rent',
        amount: 50000,
        note: 'Last rent',
        createdAt: 1000
    };
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            ...expense
        }
    });
});

test('addExpense Action default value - for redux reducer', () => {

    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdAt: 0
        }
    });
});