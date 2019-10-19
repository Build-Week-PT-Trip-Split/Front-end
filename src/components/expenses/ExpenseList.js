import React from 'react';
import axios from 'axios';
import ExpenseCard from './ExpenseCard';

const ExpenseList = props => {

    const [exp, setExp] = React.useState([]);

    React.useEffect(() => {
        
        const getExp = () => {

            axios

            .then(response => {
                setExp(response);
            })
            .catch(err => {
                console.error('Server Error', err)
            });
        }
        getExp();
    }, []);

    return (
        <div className='expenseList'>
            {exp.map(expense => (
                <ExpenseDetails key={expense.id} exp={expense} />
            ))}
        </div>
    );
};

function ExpenseDetails({ expense }) {
    return (
        <ExpenseCard exp={expense} />
    );
};

export default ExpenseList;