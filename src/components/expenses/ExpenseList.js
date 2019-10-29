import React from 'react';
import {connect} from 'react-redux';
import ExpenseCard from './ExpenseCard';
import {getExpenses} from '../../actions/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { ListGroup } from 'reactstrap';

const ExpenseList = props => {
    React.useEffect(() => {
        props.getExpenses();
    }, []);

    const expenses = props.expenses.filter(expense => expense.trip_id === props.trip.id);

    console.log(expenses.length)

    return (
        <div className='expenseList'>
            <div className="expenses-header">
                <h2>Expenses:</h2>
                <button onClick={props.addExpense} className="button-teal">
                    Add Expense
                </button>
            </div>   
            <ListGroup>
            {
                // expenses.length == 0 ? 
                <div className="no-expenses">
                    <FontAwesomeIcon icon={faCoins}/>
                    <p>No Expenses</p>
                 </div> 
                //  : expenses.reverse().map(expense => <ExpenseCard key={expense.id} exp={expense} />)
            }
            </ListGroup>
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