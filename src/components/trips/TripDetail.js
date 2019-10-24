import React from 'react'
import {connect} from 'react-redux';
import ExpenseList from '../expenses/ExpenseList';

const TripDetail = (props) => {
    console.log("In TripDetail", props)
    return (
        <div>
            <h1>{props.trips.name}</h1>
            {(() => {
                if (props.trips.complete == 1) {
                    return (<h3>Status: <span className='completed'>Completed</span></h3>)
                } else {
                    return (<h3>Status: <span className='open'>Open</span></h3>)
                }
            })()}
            <img src={props.trips.img} alt="" />
            <p>Date of Trip: {props.trips.date}</p>
            <ExpenseList trip={props.trips} />
            <p>Cost: {props.trips.base_cost}</p>
            {/* {props.trips.participants.map(part => {
                return (
                    <div>
                        <p>Name: {part.user.name}</p>
                        <img src={part.user.src} />
                    </div>
                )
            })} */}
            <button>Edit Trip</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        trips: state.tripReducer.trips
    }
}

export default connect(mapStateToProps, {})(TripDetail);