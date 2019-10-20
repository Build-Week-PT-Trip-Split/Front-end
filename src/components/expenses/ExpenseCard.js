import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseCard = ({exp}) => {

    const { expense_name, total_expense_price, primary_paid, id } = exp;

    return (
        <div className='expenseCard'>
            <h3>Expense:</h3>
            <Link to={`/expense/${id}`}>
                <h3>{expense_name}</h3>
            </Link>
            <p>Amount: {total_expense_price}</p>
            <p>Primary: {primary_paid}</p>
        </div>
    );
};

export default ExpenseCard;