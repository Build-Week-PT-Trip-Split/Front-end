import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const ExpenseCard = ({exp}) => {

    const { expense_name, total_expense_price, primary_paid, id } = exp;

    return (
        <div className='expenseCard'>
            <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle>{expense_name}</CardTitle>
                    <CardText>Amount: {total_expense_price}</CardText>
                    <CardText>Primary: {primary_paid}</CardText>
                    <Button><Link to={`/expense/${id}`}>View Expense</Link></Button>
                </Card>
            </Col>
            </Row>
        </div>
      );
};

export default ExpenseCard;