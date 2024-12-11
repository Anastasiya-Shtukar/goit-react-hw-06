import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <div className={css.contactDiv}>
      <div>
        <div className={css.person}>
          <IoPersonSharp />
          <p>{contact.name}</p>
        </div>
        <div className={css.person}>
          <FaPhone />
          <p>{contact.name}</p>
        </div>
      </div>
      <button className={css.buttonDelete}>Delete</button>
    </div>
  );
};

export default Contact;
