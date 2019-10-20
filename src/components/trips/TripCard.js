import React from 'react'

const TripCard = (props) => {
    return (
        <div>
            <h1>{props.trip.name}</h1>
            <img src={props.trip.img} />
            <p>Date of Trip: {props.trip.date}</p>
            <p>Cost: {props.trip.base_cost}</p>
            <button>Edit Trip</button>
        </div>
    )
}

export default TripCard;
