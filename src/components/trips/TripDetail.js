import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import ExpenseList from '../expenses/ExpenseList';
import axiosWithAuth from '../../utils/axiosAuth.js';
import {getTrip, getExpenses, getTrips} from '../../actions/index.js';
import placeholder from '../../assets/no-picture-available-icon-1.jpg';
import AddExpense from '../expenses/AddExpense';
import { Modal } from 'reactstrap';
import UpdateTrip from './UpdateTrip';

const TripDetail = (props) => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const deleteTrip = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/trips/${props.id}`)
            .then((res) => {
                props.getTrips()
                props.history.push("/trips")
            })
            .catch((err) => console.log(err));
    }

    console.log(isUpdated);

    const settleTrip = (event) => {
        event.preventDefault();
        axiosWithAuth().put(`/trips/${props.trip.id}`, {
            complete: 1
        })
        .then((res) => {
            console.log(res);
            forceRender();
        })
        .catch(err => console.log(err))
    }

    const addToggle = () => setAddModal(!addModal);
    const editToggle = () => setEditModal(!editModal);

    const forceRender = () => {
        setIsUpdated(!isUpdated);
    }

    useEffect(() => {
        props.getTrip(props.id);
        props.getExpenses();
    }, [isUpdated])

    console.log(props)

    return (
        <div className="tripdetails">
            {props.trip ? 
                <React.Fragment>
                <h1>{props.trip.name}</h1>
                <div className="img-wrapper">
                    {(props.trip.img) ? <img src={props.trip.img} alt="" /> : <img src={placeholder} alt="" />}
                </div>
                <div className="tripdetail-header">
                    {(() => {
                        if (props.trip.complete == 1) {
                            return (<h3>Status: <span className='completed'>Completed</span></h3>)
                        } else {
                            return (<h3>Status: <span className='open'>Open</span></h3>)
                        }
                    })()}
                    <p>Date: {props.trip.date}</p>
                </div>
                <p className="trip-cost">Cost: ${props.costs}</p>
                    <ExpenseList trip={props.trip} addExpense={addToggle}/>
                    {props.trip.participants ? props.trip.participants.map(part => {
                        return (
                            <div>
                                <p>Name: {part.user.name}</p>
                                <img src={part.user.src} />
                            </div>
                        )
                    }) : null}
                </React.Fragment> :
            <p>Loading...</p>}
            <div className="trip-buttons">
                <button onClick ={editToggle} className="button-white">Edit Trip</button>
                <button className="button-white" onClick={deleteTrip}>Delete Trip</button>
                <button onClick={settleTrip} className="button-teal">Settle Trip</button>
            </div>
            <Modal isOpen={addModal} toggle={addToggle} centered >
                <AddExpense toggle={addToggle} forceRender={forceRender} trip={props.trip}/>
            </Modal>
            <Modal isOpen={editModal} toggle={editToggle} centered >
                <UpdateTrip forceRender={forceRender} trip={props.trip} toggle={editToggle}/>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log(props)
    const id = Number(props.match.params.id)
    return {
        trip: (state.tripReducer.trips.find(trip => trip.id === id)),
        id: id,
        costs: state.expenseReducer.expenses.reduce((acc, cv) => {
            if (cv.trip_id === id) {
                return acc += cv.total_expense_price;
            } else {
                return acc;
            }   
        }, 0)
    }
}

export default connect(mapStateToProps, {getTrip, getExpenses, getTrips})(TripDetail);
