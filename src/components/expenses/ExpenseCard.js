import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';

const ExpenseCard = ({exp}) => {

    const { expense_name, total_expense_price, primary_paid, id, trip_id } = exp;

    return (
        <ListGroupItem>
            <Link  to={`/trips/${trip_id}/expenses/${id}`} className='expenseCard'>
                <p>
                    <span>{expense_name}</span> paid by {primary_paid}
                </p>
                <p>${total_expense_price}</p>
            </Link>
        </ListGroupItem>
      );
};

export default ExpenseCard;