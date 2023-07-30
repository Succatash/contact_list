/* eslint-disable react/prop-types */
const ContactRow = ({contact, setSelectedContactId}) => {
	return (
		<tr
			onClick={() => {
				setSelectedContactId(contact.id);
			}}
		>
			<td>{contact.name}</td>
			<td>{contact.phone}</td>
			<td>{contact.email}</td>
		</tr>
	);
};

export default ContactRow;
