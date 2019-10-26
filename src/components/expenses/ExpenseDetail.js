import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const ExpenseDetail = ({expDetail}) => {

    const { expense_name, total_expense_price, primary_paid, id, created_at, tripName, tripParticipants } = expDetail;

    const settleExpense = (event) => {
        event.preventDefault();
        //set participant.amount = 0
    }

    return (
        <div className='expenseDetail'>
            <Link to={`/expense/${id}`}>
                <h3>{expense_name}</h3>
            </Link>
            <p>Amount: {total_expense_price}</p>
            <p>Paid By: {primary_paid}</p>
            <p>Expense Created on: {created_at} </p>
            <p>Trip Name: {tripName} </p>
            <p>Number of People Participated: {tripParticipants} </p>
            <p>Cost Per Participant: {total_expense_price/tripParticipants} </p>
            {tripParticipants.map(participant => (
                <p>{participant.name}</p>
                <p>{participant.amount}</p>
                <button onClick={settleExpense}>Settle</button>
            ))}
        </div>
    );
};

export default ExpenseDetail;