import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const initialData = {
  id: "",
  name: "",
  number: "",
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

const ContactForm = ({ handleAddContact }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <Formik
      initialValues={initialData}
      onSubmit={handleAddContact}
      validationSchema={contactSchema}
    >
      <Form className={s.conactForm}>
        <div className={s.formFieldWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
        </div>
        <div className={s.formFieldWrapper}>
          <label htmlFor={numberFieldId} className={s.formLable}>
            Number
          </label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
        </div>
        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
