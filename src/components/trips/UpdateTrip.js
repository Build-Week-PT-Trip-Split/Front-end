import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../../utils/axiosAuth.js';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const UpdateTrip = (props) => {
    const [updatedTrip, setUpdatedTrip] = useState({name: "", date: "", base_cost: ""});
    console.log(props);
    
    const {match, trips} = props;
    const tripId = match.params.id;
    
    useEffect(() => {
        const tripToUpdate = trips.find(trip => {
            return `${trip.id}` === tripId;
        });

        if(tripToUpdate) {
            setUpdatedTrip(tripToUpdate);
        }
    }, [match, trips]);

    const handleChange = (event) => {
        setUpdatedTrip({...updatedTrip, [event.target.name]: event.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().put(`/trips/${tripId}`, updatedTrip)
            .then((res) => {
                console.log(res)
                props.history.push("/trips")
                })
            .catch((err) => console.log(err))
    }

    return (
        <Form>
          <FormGroup>
            <Label for="name">Trip Name</Label>
                <Input 
                    type="text" 
                    name="name"
                    value={updatedTrip.name} 
                    placeholder="Trip Name" />
          </FormGroup>
          <FormGroup>
            <Label for="date">Date of Trip</Label>
                <Input 
                    type="text" 
                    name="date"
                    value={updatedTrip.date} 
                    placeholder="Date - dd/mm/yyyy" />
          </FormGroup>
          <FormGroup>
            <Label for="base_cost">Cost of Trip</Label>
                <Input 
                    type="text" 
                    name="base_cost"
                    value={updatedTrip.base_cost}
                    placeholder="Base Cost" />
          </FormGroup>
          <Button>Update Trip</Button>
        </Form>
      );
}

const mapStateToProps = (state) => {
    return {
        trips: state.tripReducer.trips
    }
}

export default connect(mapStateToProps, {})(UpdateTrip);
