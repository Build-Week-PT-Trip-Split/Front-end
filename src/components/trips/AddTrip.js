import React, {useState} from 'react'
import {connect} from 'react-redux';
import axiosWithAuth from '../../utils/axiosAuth.js';

const AddTrip = (props) => {
    const [tripInfo, setTripInfo] = useState({});
    console.log(tripInfo)
    
    const handleChange = (event) => {
        setTripInfo({...tripInfo, [event.target.name]: event.target.value})
        // console.log(changes);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/trips', tripInfo)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={tripInfo.name}
                    onChange={handleChange}></input>
                <input 
                    type="text"
                    name="date"
                    placeholder="Date - dd/mm/yyyy"
                    value={tripInfo.date}
                    onChange={handleChange}></input>
                <input
                    type="text"
                    name="base_cost"
                    placeholder="Base Cost"
                    value={tripInfo.base_cost}
                    onChange={handleChange}></input>
                <button>Add Trip</button>
            </form>
        </div>
    )
}

export default AddTrip
