import React from 'react';
import axios from 'axios';
import ExpenseCard from './ExpenseCard';

const Expense = (props) => {
  
  React.useEffect(() => {
    const id = props.match.params.id;

       axios

        .then(response => {
          setExpense(response.data);
        })
        .catch(error => { 
          console.error(error);
        });

  },[props.match.params.id]);

  if (!expense) {
    return <div>Loading expense information...</div>;
  }

  return (
    <ExpenseCard cost={expense} />
  );
}

export default Expense;