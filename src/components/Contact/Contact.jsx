import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contactDiv}>
      <div>
        <div className={css.person}>
          <IoPersonSharp />
          <p>{name}</p>
        </div>
        <div className={css.person}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.buttonDelete}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
