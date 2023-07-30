import './App.css';
import ContactList from './components/Contactlist';
import SelectedContact from './components/selectedContact';
import {useState} from 'react';
function App() {
	const [selectedContactId, setSelectedContactId] = useState(null);
	return (
		<>
			{selectedContactId ? (
				<SelectedContact
					selectContactId={selectedContactId}
					setSelectContactId={setSelectedContactId}
				/>
			) : (
				<ContactList setSelectedContactId={setSelectedContactId} />
			)}
		</>
	);
}

export default App;
