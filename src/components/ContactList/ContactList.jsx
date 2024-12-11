import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contact.items);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
