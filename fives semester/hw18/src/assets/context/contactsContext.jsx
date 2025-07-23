import { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const ContactsContext = createContext();
export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const checkIsRegistered = ({ name, number }) => {
    return contacts.some(
      (elem) => elem.name === name || elem.number === number
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.target);
    const id = nanoid();
    const contact = { id };

    for (let [key, value] of formData.entries()) {
      contact[key] = value.trim();
    }
    if (checkIsRegistered(contact)) {
      alert("Такий контакт вже існує");
      return;
    }
    setContacts((prev) => [...prev, contact]);
    form.reset();
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((elem) => elem.id !== id));
  };
  const filterContacts = (key) => {
    setFilteredContacts(
      contacts.filter((elem) => elem.name.toLocaleLowerCase().includes(key))
    );
  };
  useEffect(() => {
    filterContacts("");
  }, [contacts]);
  return (
    <ContactsContext.Provider
      value={{
        contacts,
        filteredContacts,
        handleSubmit,
        deleteContact,
        filterContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
