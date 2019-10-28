import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import placeholder from '../../assets/no-picture-available-icon-1.jpg';


const TripCard = (props) => {
    console.log("In TripCard", props);
    return (
        <Container className="card-container trip-container">
            <div className="img-wrapper">
                {(props.trip.img) ? <img src={props.trip.img} alt="" /> : <img src={placeholder} alt="" />}
            </div>
            <div className="card-content">
                <Link to={`/trips/${props.trip.id}`} className="card-text">
                    <h1>{props.trip.name}</h1>
                </Link>
                <p className="card-text">Date of Trip: {props.trip.date}</p>
                <p className="card-text">Cost: {props.expenses}</p>
                <button onClick={() => props.toggle(props.trip)} className="button-teal">Edit Trip</button>
            </div> 
        </Container>
    )
}

export default TripCard;
