import visibleExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: 'abc1223',
        description: 'Hosting',
        note: '',
        amount: 3000,
        createdAt: 0
    },
    {
        id: 'abc1224',
        description: 'Coffee',
        note: '',
        amount: 560,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 'abc1225',
        description: 'Office supplies',
        note: '',
        amount: 6580,
        createdAt: moment(0).add(4, 'days').valueOf() // Use valueOf() to get the regular timestamp back
    }
];


test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = visibleExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ]);
});


test('Should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = visibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ]);
});


test('Should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = visibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ]);
});