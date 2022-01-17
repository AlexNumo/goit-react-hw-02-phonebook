import React from "react";

const Contact = ({ id, name, number, changeId }) => {
  return (
    <li key={id}>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" id={id} onClick={changeId}>
        Удалить
      </button>
    </li>
  );
};
export default Contact;
