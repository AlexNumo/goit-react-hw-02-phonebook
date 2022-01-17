import React, { Component } from "react";
import { nanoid } from 'nanoid';
import AddContacts from "./AddContacts";

class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
      }
    
    AddContact = (data) => {
        const state = this.state.contacts
        .map((contact) => {
          return contact.name.includes(data.name);
        })
        .includes(true);
      if (state) {
        alert("this contact has been add");
      } else {
        data.id = nanoid();
        this.setState({ contacts: [...this.state.contacts, data] });
      }
    };
    render(){
        // const name = this.state.name;
    return(
        <>
            <section>
                <h2>Phonebook</h2>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button type="button" onClick={this.AddContact}>Add Contact</button>
            </section>
            <section>
                <h2>Contacts</h2>
                <ul>
                    <AddContacts />
                </ul>
            </section>
        </>
    );}

};

export default Phonebook;