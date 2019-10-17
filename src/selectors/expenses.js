import moment from "moment";

// Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;


        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};