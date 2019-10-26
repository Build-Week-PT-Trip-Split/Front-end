import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import placeholder from '../../assets/no-picture-available-icon-1.jpg';


const TripCard = (props) => {
    console.log("In TripCard", props);
    return (
        <Container className="card-container">
            <div className="img-wrapper">
                {(props.trip.img) ? <img src={props.trip.img} alt="" /> : <img src={placeholder} alt="" />}
            </div>
            <div className="card-content">
                <Link to={`/trips/${props.trip.id}`}>
                    <h1>{props.trip.name}</h1>
                </Link>
                <p>Date of Trip: {props.trip.date}</p>
                <p>Cost: {props.expenses}</p>
                <button>
                    <Link to={`trips/${props.trip.id}/edit`}>Edit Trip</Link>
                </button>
            </div> 
        </Container>
    )
}

export default TripCard;
