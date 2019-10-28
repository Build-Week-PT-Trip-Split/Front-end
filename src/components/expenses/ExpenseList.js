import React from 'react';
import {connect} from 'react-redux';
import ExpenseCard from './ExpenseCard';
import {getExpenses} from '../../actions/index.js';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const ExpenseList = props => {
    React.useEffect(() => {
        props.getExpenses();
    }, []);

    const expenses = props.expenses.filter(expense => expense.trip_id === props.trip.id);

    return (
        <div className='expenseList'>
            <div className="expenses-header">
                <h2>Expenses:</h2>
                <button className="button-teal">
                    <Link to={`/trips/${props.id}/expenses/new`}>Add Expense</Link>
                </button>
            </div>   
            {
                expenses.length !== 0 ? expenses.map(expense => <ExpenseCard key={expense.id} exp={expense} />) : 
                <div className="no-expenses">
                    <FontAwesomeIcon icon={faCoins}/>
                    <p>No Expenses</p>
                </div>
            }
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