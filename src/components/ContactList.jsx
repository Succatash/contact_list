import {useState, useEffect} from 'react';
import ContactRow from './ContactRow';

// eslint-disable-next-line react/prop-types
const ContactList = ({setSelectedContactId}) => {
	const [Contacts, setContact] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users'
				);
				console.log(response);
				const users = await response.json();
				console.log(users);
				setContact(users);
			} catch (err) {
				throw new Error('userData not found');
			}
		};
		fetchData();
	}, []);

	return (
		<table>
			<thead>
				<tr>
					<th colSpan='3'>Contact List</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Name</td>
					<td>Email</td>
					<td>Phone</td>
				</tr>
				{Contacts.map((contact) => {
					return (
						<ContactRow
							key={contact.id}
							contact={contact}
							setSelectedContactId={setSelectedContactId}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default ContactList;
