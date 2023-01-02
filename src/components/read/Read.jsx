import React, { useEffect,useState } from "react";
import { Button, Icon, Label, Menu, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
    const [apiData, setApiData] = useState([]);

	useEffect(() => {
        axios.get('https://63b2326b5e490925c514f21c.mockapi.io/Crud')
        .then((getData)=>{
            setApiData(getData.data);
            
        })
        
    });

    const setID = (id) => {
        localStorage.setItem('ID', id);
    }


	return (
		<Table celled>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Id</Table.HeaderCell>
					<Table.HeaderCell>First Name</Table.HeaderCell>
					<Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
                {apiData.map((data,index) => (
                    <Table.Row key={index}>
                    <Table.Cell>{data.id}</Table.Cell>
					<Table.Cell>{data.firstName}</Table.Cell>
					<Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>
                    <Link to='/update'>
                    <Button animated positive onClick={()=>setID(data.id)}>
                     <Button.Content visible>Update</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    </Link>
                    </Table.Cell>
                   
                    <Table.Cell>
                        <Link to='/delete'>
                    <Button animated negative>
                     <Button.Content visible>Delete</Button.Content>
                    <Button.Content hidden>
                      <Icon name='delete' />
                        </Button.Content>
                    </Button>
                    </Link>
                    </Table.Cell>
				</Table.Row>
                ))}
				
			</Table.Body>
		</Table>
	);
}
