import React from 'react';
import {connect} from 'react-redux';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import uuid from 'uuid';
import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

    render() {
        return (
        <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value));
            }}/>
            <select value={this.props.filters.sortBy} onChange={(e) => {
                e.target.value === 'amount' ? this.props.dispatch(sortByAmount()) : this.props.dispatch(sortByDate());
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
            startDate={this.props.filters.startDate}
            startDateId={uuid()}
            endDate={this.props.filters.endDate}
            endDateId={uuid()}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);