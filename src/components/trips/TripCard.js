import React from 'react'
import { Link } from 'react-router-dom';

const TripCard = (props) => {
    return (
        <div>
            <Link to={`/trip/${props.trip.id}`}>
                <h1>{props.trip.name}</h1>
            </Link>
            <img src={props.trip.img} alt="" />
            <p>Date of Trip: {props.trip.date}</p>
            <button>Edit Trip</button>
        </div>
    )
}

export default TripCard;
