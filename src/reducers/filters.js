import moment from 'moment';

// Default Filters State
const defaultFiltersState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

/**
 * Filters Reducer
 * @param {array} state 
 * @param {object} action 
 */
const filtersReducer = (state = defaultFiltersState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SET_START_DATE':
            return {...state, startDate: action.timestamp};
        case 'SET_END_DATE':
            return {...state, endDate: action.timestamp};
        default:
            return state;
    }
};

export default filtersReducer;