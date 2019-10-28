import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../../utils/axiosAuth.js';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const UpdateTrip = (props) => {
    const [updatedTrip, setUpdatedTrip] = useState({name: "", date: "", base_cost: 0});

    console.log(props)
    
    useEffect(() => {
        console.log("test")
        setUpdatedTrip(props.trip);
    }, []);

    const handleChange = (event) => {
        setUpdatedTrip({...updatedTrip, [event.target.name]: event.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().put(`/trips/${props.trip.id}`, {
            name: updatedTrip.name,
            date: updatedTrip.date,
            base_cost: updatedTrip.base_cost
        })
            .then((res) => {
                props.forceRender();
                props.toggle({});
                })
            .catch((err) => console.log(err))
    }

    return (
        <React.Fragment>
            <div className="form-header">
                <button onClick={props.toggle}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </div>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Trip Name</Label>
                    <Input 
                        type="text" 
                        name="name"
                        value={updatedTrip.name} 
                        placeholder="Trip Name"
                        onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="date">Date of Trip</Label>
                    <Input 
                        type="text" 
                        name="date"
                        value={updatedTrip.date} 
                        placeholder="Date - dd/mm/yyyy"
                        onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="base_cost">Cost of Trip</Label>
                    <Input 
                        type="text" 
                        name="base_cost"
                        value={updatedTrip.base_cost}
                        placeholder="Base Cost"
                        onChange={handleChange} />
            </FormGroup>
            <Button>Update Trip</Button>
            </Form>
        </React.Fragment>
      );
}

const mapStateToProps = (state) => {
    return {
        trips: state.tripReducer.trips
    }
}

export default connect(mapStateToProps, {})(UpdateTrip);
