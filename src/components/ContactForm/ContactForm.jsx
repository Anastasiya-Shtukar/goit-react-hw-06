import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd, name }) => {
  const handleSubmit = (values, actions) => {
    if (name.includes(values.name)) {
      alert("Oops, looks like contact already exists");
    } else {
      onAdd({
        id: uuidv4(),
        name: values.name,
        number: values.number,
      });
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
        <div>
          <p>Name</p>
          <Field type="text" name="name" className={css.input} />
        </div>
        <div>
          <p>Number</p>
          <Field type="number" name="number" className={css.input} />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
