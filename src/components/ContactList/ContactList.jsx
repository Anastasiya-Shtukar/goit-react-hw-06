import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

const ContactList = ({ Contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {Contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
