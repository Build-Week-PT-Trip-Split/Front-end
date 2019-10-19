import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const AddExpense = props => {
    
    const [expense, setExpense] = React.useState([]);

    React.useEffect(() => {
        if (props.status) {
            setExpense([...expense, props.status]);
        }
    }, [props.status]);

    return (
        <div className='addExpense'>
            <Form>
                <Field tpye='text' name='name' placeholder='What did you pay for?' />
                <Field tpye='text' name='amount' placeholder='How much was it?' />
                <Field tpye='text' name='paid' placeholder='Who Paid?' />
                <button type='submit'>Submit</button>
            </Form>
            {expense.map(exp => (
                <ul key={exp.id}>
                    <li>Expense: {exp.name}</li>
                    <li>Amount: {exp.amount}</li>
                    <li>Primary: {exp.primary_paid}</li>
                </ul>
            ))}
        </div>
    );

};

const myMapPropsToValues = props => {
    const returnObj = {
        expense_name: props.name || "",
        total_expense_price: props.amount || "",
        primary_paid: props.paid || "",
    };
    return returnObj;
}

const myHandleSubmit = (values, { setStatus }) => {
    axios
        
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.error(err));
};

const formikObj = {
    mapPropsToValues: myMapPropsToValues,
    handleSubmit: myHandleSubmit
};

const EnhancedFormHOC = withFormik(formikObj);

const AddExpenseForm = EnhancedFormHOC(AddExpense);

export default AddExpenseForm;