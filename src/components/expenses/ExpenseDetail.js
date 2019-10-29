import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const ExpenseDetail = (props) => {

    const { expense_name, total_expense_price, primary_paid, id, created_at, tripName, tripParticipants } = props.location.state.expense


    // const settleExpense = (event) => {
    //     event.preventDefault();
    //     //set participant.amount = 0
    // }

    return (
        <div className='expenseDetail'>
            <h3>{expense_name}</h3>
            <p>Amount: {total_expense_price}</p>
            <p>Paid By: {primary_paid}</p>
            <p>Expense Created on: {created_at} </p>
            <p>Trip Name: {tripName} </p>
            <p>Number of People Participated: {tripParticipants} </p>
            <p>Cost Per Participant: {total_expense_price/tripParticipants} </p>
            {/* {tripParticipants.map(participant => (
                <div>
                    <p>{participant.name}</p>
                    <p>{participant.amount}</p>
                    <button onClick={settleExpense}>Settle</button>
                </div>
            ))} */}
        </div>
    );
};

export default ExpenseDetail;