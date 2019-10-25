import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const ExpenseDetail = ({expDetail}) => {

    const { expense_name, total_expense_price, primary_paid, id, created_at, tripName, tripParticipants } = expDetail;

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
        </div>
    );
};

export default ExpenseDetail;