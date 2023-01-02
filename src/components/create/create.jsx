import { Button, Form } from "semantic-ui-react";
import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";


function create() {
	let navigate = useNavigate()
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
    

    const sendDataToApi = () => {
        axios.post('https://63b2326b5e490925c514f21c.mockapi.io/Crud',{
            firstName,
            lastName
        }).then(()=>{
			navigate('/')
		})
    }

    

	return (
		<Form>
			<Form.Field>
				<label>First Name</label>
				<input
					name="fname"
					onChange={(e) => setFirstName(e.target.value)}
					placeholder="First Name"
				/>
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input
					name="lname"
					onChange={(e) => setLastName(e.target.value)}
					placeholder="Last Name"
				/>
			</Form.Field>
			<Button type="submit" onClick={sendDataToApi}>Submit</Button>
                <Link to='/'><Button>Home</Button></Link>
                
          
		</Form>
	);
}
export default create;
