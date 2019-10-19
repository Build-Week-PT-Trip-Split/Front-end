import React from 'react'
import {connect} from 'react-redux';

import TripCard from './TripCard.js';


const TripsList = (props) => {
    console.log("In TripsList", props)
    return (
        <div>
            <h1>Trips</h1>
            {props.trips.map((trip) => {
                return <TripCard key={trip.id} trip={trip} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trips: state.trips
    }
}

export default connect(mapStateToProps, {})(TripsList);