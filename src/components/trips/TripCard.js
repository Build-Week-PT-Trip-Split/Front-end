import React from 'react'
import {Link} from 'react-router-dom';
import ExpenseList from '../expenses/ExpenseList';

const TripCard = (props) => {
    return (
        <div>
            <h1>{props.trip.name}</h1>
            <img src={props.trip.img} alt="" />
            <p>Date of Trip: {props.trip.date}</p>
            <ExpenseList trip={props.trip}/>
            <p>Cost: {props.trip.base_cost}</p>
            <button><Link to={`/edit/trip/${props.trip.id}`}>Edit Trip</Link></button>
        </div>
    )
}

export default TripCard;
