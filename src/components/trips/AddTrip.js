import React, {useState} from 'react'
import axiosWithAuth from '../../utils/axiosAuth.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AddTrip = (props) => {
    const [tripInfo, setTripInfo] = useState(
        {
            name: "", 
            date: "", 
            base_cost: 0,
            img: "",
            complete: 0,
            user_id: localStorage.getItem("userID")
        });
    
    const handleChange = (event) => {
        setTripInfo({...tripInfo, [event.target.name]: event.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/trips', tripInfo)
            .then((res) => {
                console.log(res);
                props.forceRender();
                props.toggle();
                })
            .catch((err) => console.log(err))
    }

    console.log(props)

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
                <Button className="button-teal">Add Trip</Button>
            </Form>
        </React.Fragment>
      );

}

export default AddTrip
