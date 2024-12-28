// src/components/ContactForm/ContactForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Min 3 characters")
      .max(50, "Max 50 characters"),
    number: Yup.string()
      .required("Required")
      .min(3, "Min 3 characters")
      .max(50, "Max 50 characters"),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onAddContact(values.name, values.number);
          resetForm();
        }}
      >
        <Form className={s.form}>
          <div>
            <label htmlFor="name" className={s.label}>
              Name
            </label>
            <Field type="text" name="name" className={s.input} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
          <div>
            <label htmlFor="number" className={s.label}>
              Number
            </label>
            <Field type="text" name="number" className={s.input} />
            <ErrorMessage name="number" component="div" className={s.error} />
          </div>
          <button type="submit" className={s.btn}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
