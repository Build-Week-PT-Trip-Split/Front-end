import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import ExpenseList from '../expenses/ExpenseList';
import placeholder from '../../assets/no-picture-available-icon-1.jpg';


const TripCard = (props) => {
    return (
        <Container className="card-container">
                <div className="img-wrapper">
                    {(props.trip.img) ? <img src={props.trip.img} alt="" /> : <img src={placeholder} alt="" />}
                    
                </div>
                <div className="card-content">
                <Link to={`/trip/${props.trip.id}`}>
                    <h1>{props.trip.name}</h1>
                </Link>
                <p>Date of Trip: {props.trip.date}</p>
                <p>Cost: {props.trip.base_cost}</p>
                <button><Link to={`/edit/trip/${props.trip.id}`}>Edit Trip</Link></button>
                </div>
                
        </Container>
    )
}

export default TripCard;
