import React from 'react';
import {connect} from 'react-redux';
import ExpenseCard from './ExpenseCard';
import {getExpenses} from '../../actions/index.js';

const ExpenseList = props => {
    console.log(props)
    React.useEffect(() => {
        props.getExpenses();
    }, []);

    return (
        <div className='expenseList'>
            <h2>Expenses:</h2>
            {props.expenses.map(expense => expense.trip_id === props.trip.id ? <ExpenseCard key={expense.id} exp={expense} /> : null
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        expenses: state.expenseReducer.expenses
    }
}

export default connect(mapStateToProps, {getExpenses})(ExpenseList);

// expense.trip_id === props.trip.id ? <ExpenseCard key={expense.id} exp={expense} /> : null