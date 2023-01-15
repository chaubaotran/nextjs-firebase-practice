import { Field, Form, Formik } from "formik";
import { useState } from "react";

import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import Loader from "../loader";
import { LoginSchema } from "./login.schema";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [authError, setAuthError] = useState(false);
  const { signIn } = useFirebaseAuth();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values, { resetForm, setErrors }) => {
        if (!values.email) {
          setErrors({ email: "Email is required" });
          return;
        }

        if (!values.password) {
          setErrors({ password: "Password is required" });
          return;
        }

        try {
          signIn(values.email, values.password);
          resetForm();
          setAuthError(false);
        } catch(e) {
          setAuthError(true);
        }
      }}
    >
      {({ isSubmitting, errors, touched }) =>
        isSubmitting ? (
          <Loader />
        ) : (
          <Form>
            <Field type="text" name="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="password" name="password" />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            {authError && <p>Authentication failed</p>}
          </Form>
        )
      }
    </Formik>
  );
};

export default Login;
