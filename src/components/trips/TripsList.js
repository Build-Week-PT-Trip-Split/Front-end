import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getTrips} from '../../actions/index.js';

import TripCard from './TripCard.js';

const TripsList = (props) => {
    useEffect(() => {
        props.getTrips();
    }, [])
    
    return (
        <div>
            <h1>Current Trips</h1>
            <Link to="/trips/new">Add Trip</Link>
            {props.trips.map((trip) => trip.complete === 0 ? <TripCard key={trip.id} trip={trip} /> : null
            )}
            <h1>Past Trips</h1>
            {props.trips.map((trip) => trip.complete === 1 ? <TripCard key={trip.id} trip={trip} /> : null
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trips: state.tripReducer.trips
    }
}

export default connect(mapStateToProps, {getTrips})(TripsList);
