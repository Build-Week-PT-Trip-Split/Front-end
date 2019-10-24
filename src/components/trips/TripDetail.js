import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import ExpenseList from '../expenses/ExpenseList';
import axiosWithAuth from '../../utils/axiosAuth.js';
import {getTrip} from '../../actions/index.js';

const TripDetail = (props) => {
    const trip = props.trips.find((item) => {
        return `${item.id} === props.match.params.id`
    });

    const deleteTrip = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/trips/${trip.id}`)
            .then((res) => {
                props.getTrips()
                props.history.push("/trips")
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        props.getTrip(props.id);
    }, [])

    console.log(props)

    return (
        <div>
            {props.trip ? 
            <React.Fragment>
            <h1>{props.trip.name}</h1>
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
        </React.Fragment> :
            <p>Loading...</p>}
            <button>Edit Trip</button>
            <button onClick={deleteTrip}>Delete Trip</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = Number(props.match.params.id)
    return {
        trip: (state.tripReducer.trips.filter(trip => trip.id === id))[0]
    }
}

export default connect(mapStateToProps, {getTrip})(TripDetail);
