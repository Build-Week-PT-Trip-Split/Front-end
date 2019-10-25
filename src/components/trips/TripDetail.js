import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import ExpenseList from '../expenses/ExpenseList';
import axiosWithAuth from '../../utils/axiosAuth.js';
import {getTrip} from '../../actions/index.js';
import {Link} from 'react-router-dom';

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
        <div>
            {props.trip ? 
                <React.Fragment>
                <h1>{props.trip.name}</h1>
                    {(() => {
                        if (props.trip.complete == 1) {
                            return (<h3>Status: <span className='completed'>Completed</span></h3>)
                        } else {
                            return (<h3>Status: <span className='open'>Open</span></h3>)
                        }
                    })()}
                    <img src={props.trip.img} alt="" />
                    <p>Date of Trip: {props.trip.date}</p>
                    <ExpenseList trip={props.trip} />
                    <button>
                        <Link to={`/trips/${props.id}/expenses/new`}>Add Expense</Link>
                    </button>
                    <p>Cost: {props.trip.base_cost}</p>
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
            <button>
                <Link to={`/trips/${props.id}/edit`}>Edit Trip</Link>
            </button>
            <button onClick={deleteTrip}>Delete Trip</button>
            {(() => {
                if (props.trips.base_cost === 0) {
                    return (<button onClick={settleTrip}>Settle Trip</button>)
                }
            })()}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log(props)
    const id = Number(props.match.params.id)
    return {
        trip: (state.tripReducer.trips.filter(trip => trip.id === id))[0],
        id: id
    }
}

export default connect(mapStateToProps, {getTrip})(TripDetail);
