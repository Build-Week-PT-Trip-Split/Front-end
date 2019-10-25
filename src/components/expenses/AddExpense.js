import React from "react";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from '../../utils/axiosAuth.js';
import {getExpenses} from '../../actions/index.js';

const AddExpense = props => {

    return (
        <div className='addExpense'>
            <Form>
                <Field tpye='text' name='expense_name' placeholder='What did you pay for?' />
                <Field tpye='text' name='total_expense_price' placeholder='How much was it?' />
                <Field tpye='text' name='primary_paid' placeholder='Who Paid?' />
                <button type='submit'>Submit</button>
            </Form>
            {/* {expense.map(exp => (
                <ul key={exp.id}>
                    <li>Expense: {exp.name}</li>
                    <li>Amount: {exp.amount}</li>
                    <li>Primary: {exp.primary_paid}</li>
                </ul>
            ))} */}
        </div>
    );

};

const myMapPropsToValues = (props) => {
    console.log(props)
    const returnObj = {
        expense_name: props.expense_name || "",
        total_expense_price: props.total_expense_price || "",
        primary_paid: props.primary_paid || "",
        trip_id: props.match.params.id
    };
    return returnObj;
}

const myHandleSubmit = (values, {props}) => {
    console.log(values, props)
        axiosWithAuth().post('/expenses', values)
            .then((res) => {
                console.log(res)
                getExpenses();
                props.history.push(`/trips/${values.trip_id}`)
                })
            .catch((err) => console.log(err))
};

const formikObj = {
    mapPropsToValues: myMapPropsToValues,
    handleSubmit: myHandleSubmit
};

const EnhancedFormHOC = withFormik(formikObj);

const AddExpenseForm = EnhancedFormHOC(AddExpense);

export default AddExpenseForm;