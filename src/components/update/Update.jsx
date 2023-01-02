import { Button, Form } from "semantic-ui-react";
import React, { useState,useEffect } from "react";
import axios from "axios";


function Update() {

    const [ ID, setID ] = useState(null);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
 
    console.log(firstName,lastName);
    

    
    
    const sendDataToApi = () => {
        axios.put(`https://63b2326b5e490925c514f21c.mockapi.io/Crud/${ID}`,{
            firstName,
            lastName
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setID(localStorage.getItem("ID"));
    },[]);


    

	return (
        <div>
		<Form>
			<Form.Field>
				<label>First Name</label>
				<input
					name="fname"
					onChange={(e) => setFirstName(e.target.value)}
                    value={firstName ? firstName : ""}        
					placeholder="First Name"
				/>
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input
					name="lname"
					onChange={(e) => setLastName(e.target.value)}
                    value={lastName ? lastName : ""}                 
					placeholder="Last Name"
				/>
			</Form.Field>
			<Button type="submit" onClick={sendDataToApi}>Update</Button>
		</Form>
        </div>
	);
}
export default Update;
