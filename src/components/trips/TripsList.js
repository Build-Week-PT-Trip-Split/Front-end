import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getTrips, getExpenses} from '../../actions/index.js';

import TripCard from './TripCard.js';

const TripsList = (props) => {
    useEffect(() => {
        props.getTrips();
        props.getExpenses();
    }, [])
    
    return (
        <div>
            <h1>Current Trips</h1>
            <Link to="/trips/new">Add Trip</Link>
            {props.trips.map((trip) => trip.complete === 0 ? 
                <TripCard 
                    key={trip.id} 
                    trip={trip} 
                    expenses={props.expenses.reduce((acc, cv) => {
                        if (cv.trip_id === trip.id) {
                            return acc += cv.total_expense_price;
                        } else {
                            return acc;
                        }   
                    }, 0)} /> : null
            )}
            <h1>Past Trips</h1>
            {props.trips.map((trip) => trip.complete === 1 ? 
                <TripCard 
                    key={trip.id} 
                    trip={trip} 
                    expenses={props.expenses.reduce((acc, cv) => {
                        if (cv.trip_id === trip.id) {
                            return acc += cv.total_expense_price;
                        } else {
                            return acc;
                        }   
                    }, 0)} /> : null
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trips: state.tripReducer.trips,
        expenses: state.expenseReducer.expenses
    }
}

export default connect(mapStateToProps, {getTrips, getExpenses})(TripsList);
