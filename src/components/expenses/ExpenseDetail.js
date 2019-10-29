import React, {useState} from 'react';
import { Modal } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ExpenseDetail = (props) => {
    console.log(props)
    const { expense_name, total_expense_price, primary_paid, id, created_at, tripName, tripParticipants } = props.location.state.expense
    const [primaryPaid, setPrimaryPaid] = useState({
        name: primary_paid,
        amount: total_expense_price
    })
    const [participant, setParticipant] = useState({})

    const [payments, setPayments] = useState([])

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleChange = (event) => {
        setParticipant({...participant, [event.target.name]: event.target.value})
    }

    const makePayment = (amount) => {
        const primary = {
            name: primaryPaid.name,
            amount: primaryPaid.amount - amount
        }
        setPrimaryPaid(primary)
    }

    const addPayment = (event) => {
        event.preventDefault();
        setPayments([...payments, participant]);
        makePayment(participant.amount);
        setParticipant({
            "name": "",
            "amount": ""
        });
        toggle();
    }

    return (
        <div className='expenseDetail'>
            <h1>{expense_name}</h1>
            <div className="expense-header">
                <p>Amount: ${total_expense_price}</p>
                <p>Paid By: {primary_paid}</p>
            </div>
            <p>Expense Created on: {created_at} </p>
            {/* <p>Trip Name: {tripName} </p> */}
            {/* <p>Number of People Participated: {tripParticipants} </p>
            <p>Cost Per Participant: {total_expense_price/tripParticipants} </p> */}
            <div className="expenseParticipants">
                <div className="participants-header">
                    <h3>Participants</h3>
                    <button onClick={toggle} className="button-teal">
                        Add Participant
                    </button>
            </div>
            <ListGroup className="participants-list">
            <ListGroupItem className="participant">
                <span>{primaryPaid.name}</span>
                <span>${primaryPaid.amount}</span>
            </ListGroupItem>
            
            {
                payments.map(participant => 
                    <ListGroupItem className="participant">
                        <span>{participant.name}</span>
                        <span>${participant.amount}</span>
                    </ListGroupItem>
                )
            }
            </ListGroup>
            </div>
            {
                <React.Fragment>
                    <Modal isOpen={modal} toggle={toggle} centered >
                        <form onSubmit={addPayment}>
                            <label>Name</label>
                            <input onChange={handleChange} type="text" name="name" value={participant.name}></input>
                            <label>Amount</label>
                            <input onChange={handleChange} type="number" name="amount" value={participant.amount}></input>
                            <button>Pay</button>
                        </form>
                    </Modal>
                    <button onClick={props.history.goBack} className="button-teal">
                        {/* <Link to="">Back to Trip</Link> */}
                        Back to Trip
                        </button>
                </React.Fragment>
            }
        </div>
    );
};

export default ExpenseDetail;