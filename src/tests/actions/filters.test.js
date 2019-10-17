import moment from 'moment';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';

test('setTextFilter Action', () => {
    const text = 'Bill'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('setTextFilter Action - without provided value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('sortByDate Action', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('sortByAmount Action', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('setStartDate Action', () => {
    const timestamp = moment(1000);
    const action = setStartDate(timestamp);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        timestamp
    });
});

test('setEndDate Action', () => {
    const timestamp = moment(1000);
    const action = setEndDate(timestamp);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        timestamp
    });
});