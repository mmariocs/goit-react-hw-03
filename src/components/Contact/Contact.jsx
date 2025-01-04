import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <div className={s.contactWrapper}>
      <ul className={s.infoList}>
        <li className={s.infoItem}>
          <IoMdPerson /> <p>{name}</p>
        </li>
        <li className={s.infoItem}>
          <FaPhoneAlt /> <p>{number}</p>
        </li>
      </ul>
      <button
        type="button"
        className={s.deleteBtn}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
