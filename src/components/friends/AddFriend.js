import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";

import axios from "axios";

const AddFriend = (props) => {

    const [friendSearch, setfriendSearch] = useState();
    const [friends, setFriends] = useState([]);
    const [results, setResults] = useState([]);

    useEffect( () => {
        axios
        .get(`https://tripsplitr.herokuapp.com/users`)
        .then (res => {
            const names = res.data.map( re => {
                return re.name;
            });

            setResults(names);
        });

        const searchedName = results.filter(resul => 
            resul.toLowerCase().includes(friendSearch)
        )

        setFriends(searchedName);

      }, [friendSearch]);


      const handleSearch = e => {
        setfriendSearch(e.target.value);
        console.log("This is the value", e.target.value );
      }

    return (
        <div className="addFriend" >
            <h1> Add Friend</h1>
            <Form className="addFriendForm">
                <Field id="search" type="text" name="search" placeholder="Search" className="inputField"  />


                <label htmlFor="friendList" className="addFriendDrop">
                    <h4>Or Choose from list below:</h4>
                <Field component="select" name="friendList" className="dropField">
                    <option></option>
                    {results.map(friend => (
                    <option  value={friend}>{friend}</option> 
                        ))}
                </Field>
                </label>
                <button className="formBtn">Submit</button>
            </Form>
        
        </div>
    );
};


const AddFriendFormik = withFormik({
    mapPropsToValues( {search, friendList} ) {
        return {
            search: search || "",
            friendList: friendList || ""
        }
    },
    // validation

    handleSubmit(values, {} ) {

    }


})(AddFriend);



export default AddFriendFormik;
