import { Button, Form } from "semantic-ui-react";
import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Update() {
	let navigate = useNavigate()
    const [ id, setID ] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
 
  
    

    
    
    const sendDataToApi = () => {
        axios.put(`https://63b2326b5e490925c514f21c.mockapi.io/Crud/${id}`,{
            firstName,
            lastName
        }).then(()=>{
			navigate("/")
			
		})
    }

    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setID(localStorage.getItem("id"));
    },[]);

	return (
        <div>
		<Form>
			<Form.Field>
				<label>First Name</label>
				<input
					name="fname"
					value={firstName}
					placeholder="First Name"
					onChange={(e) => setFirstName(e.target.value)}      
					
				/>
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input
					name="lname"
					value={lastName}
					placeholder="Last Name" 
					onChange={(e) => setLastName(e.target.value)}            
					
				/>
			</Form.Field>
			<Button type="submit" onClick={sendDataToApi}>Update</Button>
		</Form>
        </div>
	);
}
export default Update;
