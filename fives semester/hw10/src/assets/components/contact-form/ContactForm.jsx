import { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <form onSubmit={(e) => onSubmit(e, this.state)} action="">
        <div className="">
          <label htmlFor="contact-name">Name</label>
          <input
            type="text"
            name="name"
            id="contact-name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e) =>
              this.handleChange(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </div>
        <div className="">
          <label htmlFor="contact-phone">Number</label>
          <input
            type="tel"
            name="number"
            id="contact-phone"
            pattern="\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(e) =>
              this.handleChange(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
