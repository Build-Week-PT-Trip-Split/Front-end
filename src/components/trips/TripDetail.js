import React from 'react'
import {connect} from 'react-redux';
import ExpenseList from '../expenses/ExpenseList';
import axiosWithAuth from '../../utils/axiosAuth.js';
import {getTrips} from '../../actions/index.js';

const TripDetail = (props) => {
    console.log("axiosWithAuth", axiosWithAuth)

    const trip = props.trips.find((item) => {
        return `${item.id} === props.match.params.id`
    });
    console.log(trip);

    const deleteTrip = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/trips/${trip.id}`)
            .then((res) => {
                console.log(res);
                props.getTrips()
                props.history.push("/trips")
            })
            .catch((err) => console.log(err));
    }

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
            <button onClick={deleteTrip}>Delete Trip</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        trips: state.tripReducer.trips
    }
}

export default connect(mapStateToProps, {getTrips})(TripDetail);