import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {getTrips, getExpenses} from '../../actions/index.js';

import TripCard from './TripCard.js';
import AddTrip from './AddTrip';
import { Modal } from 'reactstrap';

const TripsList = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        props.getTrips();
        props.getExpenses();
        setIsUpdated(true);
    }, [isUpdated])

    const forceRender = () => {
        setIsUpdated(!isUpdated);
    }


    
    return (
        <div className="triplist">
            <div className="triplist-header">
                <h1>Current Trips</h1>
                <button className="button-white" onClick={toggle}>
                    {/* <Link to="/trips/new">Add Trip</Link> */}
                    Add Trip
                </button>
            </div>
            {props.trips.reverse().map((trip) => trip.complete === 0 ? <TripCard 
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
            <div className="triplist-header">
                <h1>Past Trips</h1>
            </div>
            {props.trips.reverse().map((trip) => trip.complete === 1 ? <TripCard 
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
            <Modal isOpen={modal} toggle={toggle} centered >
                <AddTrip toggle={toggle} forceRender={forceRender}/>
            </Modal>
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
