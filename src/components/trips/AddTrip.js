import React, {useState} from 'react'
import axiosWithAuth from '../../utils/axiosAuth.js';
import {getTrips} from '../../actions/index.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddTrip = (props) => {
    const [tripInfo, setTripInfo] = useState(
        {
            name: "", 
            date: "", 
            base_cost: "",
            complete: 0
        });
    
    const handleChange = (event) => {
        setTripInfo({...tripInfo, [event.target.name]: event.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/trips', tripInfo)
            .then((res) => {
                console.log(res)
                getTrips();
                props.history.push("/trips")
                })
            .catch((err) => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Trip Name</Label>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder="Trip Name"
                    value={tripInfo.name}
                    onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="date">Date of Trip</Label>
                <Input 
                    type="text" 
                    name="date" 
                    placeholder="Date - dd/mm/yyyy"
                    value={tripInfo.date}
                    onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="base_cost">Cost of Trip</Label>
                <Input 
                    type="text" 
                    name="base_cost" 
                    placeholder="Base Cost"
                    value={tripInfo.base_cost}
                    onChange={handleChange} />
          </FormGroup>
          <Button>Add Trip</Button>
        </Form>
      );

}

export default AddTrip
