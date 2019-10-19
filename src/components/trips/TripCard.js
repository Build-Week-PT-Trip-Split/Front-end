import React from 'react'

const TripCard = (props) => {
    return (
        <div>
            <h1>{props.trip.name}</h1>
            <img src={props.trip.img} />
            <p>{props.trip.date}</p>
            <p>{props.trip.base_cost}</p>
            <button>Edit Trip</button>
        </div>
    )
}

export default TripCard;
