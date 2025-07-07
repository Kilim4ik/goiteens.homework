import { Component } from "react";
import ContactListItem from "./ContactListItem";
class ContactList extends Component {
  render() {
    const { filter, contacts, handleDelete } = this.props;
    return (
      <ul>
        {filter
          ? contacts
              .filter((elem) =>
                elem.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map(({ id, name, number }) => (
                <ContactListItem
                  key={id}
                  name={name}
                  number={number}
                  handleDelete={() => handleDelete(id)}
                />
              ))
          : contacts.map(({ id, name, number }) => (
              <ContactListItem
                key={id}
                name={name}
                number={number}
                handleDelete={() => handleDelete(id)}
              />
            ))}
      </ul>
    );
  }
}
export default ContactList;
