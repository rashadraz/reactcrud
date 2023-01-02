import React, { useEffect, useState } from "react";
import { Button, Icon, Label, Menu, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		axios
			.get("https://63b2326b5e490925c514f21c.mockapi.io/Crud")
			.then((getData) => {
				setApiData(getData.data);
			}, []);
	});

	const setData = (id, firstName, lastName) => {
		localStorage.setItem("ID", id);
		localStorage.setItem("firstName", firstName);
		localStorage.setItem("lastName", lastName);
	};
	const getData = () => {
		axios
			.get(`https://63b2326b5e490925c514f21c.mockapi.io/Crud`)
			.then((getData) => {
				setApiData(getData.data);
			});
	};

	const onDelete = (id) => {
		axios
			.delete(`https://63b2326b5e490925c514f21c.mockapi.io/Crud/${id}`)
			.then(() => {
				getData();
			});
	};

	return (
		<div>
            <div>
                <Link to='/create'><Button>Create</Button></Link>
                
            </div>
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
					{apiData.map((data, index) => (
						<Table.Row key={index}>
							<Table.Cell>{data.id}</Table.Cell>
							<Table.Cell>{data.firstName}</Table.Cell>
							<Table.Cell>{data.lastName}</Table.Cell>
							<Table.Cell>
								<Link to="/update">
									<Button
										animated
										positive
										onClick={() =>
											setData(data.id, data.firstName, data.lastName)
										}
									>
										<Button.Content visible>Update</Button.Content>
										<Button.Content hidden>
											<Icon name="arrow right" />
										</Button.Content>
									</Button>
								</Link>
							</Table.Cell>

							<Table.Cell>
								<Button animated negative onClick={() => onDelete(data.id)}>
									<Button.Content visible>Delete</Button.Content>
									<Button.Content hidden>
										<Icon name="delete" />
									</Button.Content>
								</Button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</div>
	);
}
