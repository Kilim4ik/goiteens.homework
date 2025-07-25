export default function Contactslist({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
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
