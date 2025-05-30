import { Component } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import ContactForm from "./assets/components/contact-form/ContactForm";
import Finder from "./assets/components/finder/Finder";
import ContactList from "./assets/components/contact-list/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleSubmit = (e, contact) => {
    const form = e.currentTarget;
    const contactID = nanoid();
    e.preventDefault();
    console.log(form.reportValidity());
    // if (form.reportValidity()) {
    //   alert("Not valid data");
    //   return;
    // }
    if (this.state.contacts.find((elem) => elem.name === contact.name)) {
      alert("This name is already used");
      return;
    }
    this.setState((prev) => ({
      contacts: [...prev.contacts, { id: contactID, ...contact }],
    }));
    form.reset();
  };
  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts.filter((elem) => elem.id !== id)],
    }));
  };
  handleSearch = (filter) => {
    this.setState({ filter });
  };
  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) this.setState({ contacts });
  }
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Finder onChange={this.handleSearch} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
