// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
export const setStartDate = (timestamp) => ({
    type: 'SET_START_DATE',
    timestamp
});

// SET_END_DATE
export const setEndDate = (timestamp) => ({
    type: 'SET_END_DATE',
    timestamp
});