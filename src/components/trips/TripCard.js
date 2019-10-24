import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import ExpenseList from '../expenses/ExpenseList';


const TripCard = (props) => {
    console.log("In TripCard", props)
    return (
        <Container>
            <div>
                <Link to={`/trip/${props.trip.id}`}>
                    <h1>{props.trip.name}</h1>
                </Link>
                <img src={props.trip.img} alt="" />
                <p>Date of Trip: {props.trip.date}</p>

                <ExpenseList trip={props.trip}/>
                <p>Cost: {props.trip.base_cost}</p>
                <button><Link to={`/edit/trip/${props.trip.id}`}>Edit Trip</Link></button>
            </div>
        </Container>
    )
}

export default TripCard;
