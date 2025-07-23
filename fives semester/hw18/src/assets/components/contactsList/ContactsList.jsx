import { useContext } from "react";
import { ContactsContext } from "../../context/contactsContext";

export default function Contactslist() {
  const { filteredContacts, deleteContact } = useContext(ContactsContext);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} - {number}
          </p>
          <button onClick={() => deleteContact(id)}> Delete</button>
        </li>
      ))}
    </ul>
  );
}
