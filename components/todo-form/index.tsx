import React from "react";
import { Formik, Form, Field } from "formik";

import { TodoFormSchema } from "./todo-form.schema";
import { useTodoCollection } from "../../hooks/useTodoCollection";

const TodoForm = () => {
  const initialValues = { description: "", completeDate: "" };

  const { create } = useTodoCollection();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TodoFormSchema}
      onSubmit={(values, { resetForm }) => {
        if (!values) return;

        create(values);
        resetForm();
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Field type="text" name="description" />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
          <Field type="date" name="completeDate" />
          {errors.completeDate && touched.completeDate ? (
            <div>{errors.completeDate}</div>
          ) : null}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
