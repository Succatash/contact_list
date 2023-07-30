import {useState, useEffect} from 'react';
import './selectedContact.css';
// eslint-disable-next-line react/prop-types
const SelectedContact = ({selectContactId, setSelectContactId}) => {
	const [contact, setContact] = useState([]);

	useEffect(() => {
		const fetchSingleUserById = async (id) => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/users/${id}`
				);
				const users = await response.json();
				setContact(users);
			} catch (err) {
				throw new Error('this error is amazing at telling me nothing');
			}
		};

		fetchSingleUserById(selectContactId);
	}, [selectContactId]);
	console.log(selectContactId);
	console.log(contact.address);
	return (
		<>
			<h3>{contact.name}</h3>
			<address id='address'>
				<a href={contact.email} target='_blank' rel='noreferrer'>
					{' '}
					{contact.email}
				</a>
				<a href={`tel:${contact.phone}`}>{contact.phone}</a>
				<a href={contact.website}>{contact.website}</a>
			</address>
			<div>{`${contact?.address?.street} ${contact?.address?.suite}`}</div>
			<div>{`${contact?.address?.city} ${contact?.address?.zipcode}`}</div>
			<br />
			<h3>Company</h3>
			<div>
				<div>{contact?.company?.name}</div>
				<div>{contact?.company?.catchPhrase}</div>
				<div>{contact?.company?.bs}</div>
			</div>

			<form>
				<input
					type='submit'
					onSubmit={() => {
						setSelectContactId(null);
					}}
				/>
			</form>
		</>
	);
};

export default SelectedContact;
