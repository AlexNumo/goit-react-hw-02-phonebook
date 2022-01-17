import React from "react";
import Contact from "./Contact";

const AddContact = ({ contacts, changeId }) => (
    <>
        <h2> Your contacts </h2>
        <ul>
            {contacts.map(({ id, name, number }) => (
                <Contact
                key={id}
                name={name}
                id={id}
                number={number}
                changeId={changeId}
                />
            ))}
        </ul>
    </>);

export default AddContact;