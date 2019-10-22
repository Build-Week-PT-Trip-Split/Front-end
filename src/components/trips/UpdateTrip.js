import React from 'react'

const UpdateTrip = () => {
    return (
        <div>
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
        </div>
    )
}

export default UpdateTrip
