import React from 'react'
import ExpenseList from '../expenses/ExpenseList';

const TripDetail = (props) => {
    return (
        <div>
            <h1>{props.trip.name}</h1>
            {(() => {
                if (props.trip.complete == 1) {
                    return (<h3>Status: <span className='completed'>Completed</span></h3>)
                } else {
                    return (<h3>Status: <span className='open'>Open</span></h3>)
                }
            })()}
            <img src={props.trip.img} alt="" />
            <p>Date of Trip: {props.trip.date}</p>
            <ExpenseList trip={props.trip} />
            <p>Cost: {props.trip.base_cost}</p>
            {props.trip.participants.map(part => {
                return (
                    <div>
                        <p>Name: {part.user.name}</p>
                        <img src={part.user.src} />
                    </div>
                )
            })}
            <button>Edit Trip</button>
        </div>
    )
}

export default TripDetail;