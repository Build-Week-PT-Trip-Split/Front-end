import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {getTrips, getExpenses} from '../../actions/index.js';

import TripCard from './TripCard.js';
import AddTrip from './AddTrip';
import UpdateTrip from './UpdateTrip';
import { Modal } from 'reactstrap';

const TripsList = (props) => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [tripToUpdate, setTripToUpdate] = useState({});

    const addToggle = () => setAddModal(!addModal);
    const editToggle = (trip) => {
        console.log('test')
        setEditModal(!editModal);
        setTripToUpdate(trip);
    };

    console.log(tripToUpdate)

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
                <button className="button-white" onClick={addToggle}>
                    {/* <Link to="/trips/new">Add Trip</Link> */}
                    Add Trip
                </button>
            </div>
            {props.trips.reverse().map((trip) => trip.complete === 0 ? <TripCard
                    toggle={editToggle}  
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
                    toggle={editToggle}  
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
            <Modal isOpen={addModal} toggle={addToggle} centered >
                <AddTrip toggle={addToggle} forceRender={forceRender}/>
            </Modal>
            <Modal isOpen={editModal} toggle={editToggle} centered >
                <UpdateTrip forceRender={forceRender} trip={tripToUpdate} toggle={editToggle}/>
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
