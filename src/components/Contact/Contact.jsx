import React from "react";
import s from "./Contact.module.css";
const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={s.contact_container}>
      <div className={s.contact_container_text}>
        <p className={s.contact_name}>{contact.name}</p>
        <p className={s.contact_number}>{contact.number}</p>
      </div>
      <button
        className={s.contact_btn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
