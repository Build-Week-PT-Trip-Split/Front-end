import React from 'react'
import {connect} from 'react-redux';
import PrivateRoute from '../PrivateRoute.js';
import {Link} from 'react-router-dom';

import TripCard from './TripCard.js';
import AddTrip from './AddTrip.js';


const TripsList = (props) => {
    console.log("In TripsList", props)
    return (
        <div>
            <h1>Trips</h1>
            <Link to="/new/trip">Add Trip</Link>
            
            {props.trips.map((trip) => {
                return <TripCard key={trip.id} trip={trip} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        trips: state.tripReducer.trips
    }
}

export default connect(mapStateToProps, {})(TripsList);
