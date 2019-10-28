import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import ExpenseList from '../expenses/ExpenseList';
import axiosWithAuth from '../../utils/axiosAuth.js';
import {getTrip} from '../../actions/index.js';
import {Link} from 'react-router-dom';
import placeholder from '../../assets/no-picture-available-icon-1.jpg';

const TripDetail = (props) => {

    const deleteTrip = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/trips/${props.id}`)
            .then((res) => {
                props.getTrips()
                props.history.push("/trips")
            })
            .catch((err) => console.log(err));
    }

    const settleTrip = (event) => {
        event.preventDefault();
        //set props.trip.complete = 1
    }

    useEffect(() => {
        props.getTrip(props.id);
    }, [])

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
                <p className="trip-cost">Cost: {props.costs}</p>
                    <ExpenseList trip={props.trip} />
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
                <button className="button-white">
                    <Link to={`/trips/${props.id}/edit`}>Edit Trip</Link>
                </button>
                <button className="button-white" onClick={deleteTrip}>Delete Trip</button>
                {props.costs === 0 ? <button onClick={settleTrip} className="button-teal">Settle Trip</button> : null}
            </div>
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

export default connect(mapStateToProps, {getTrip})(TripDetail);
