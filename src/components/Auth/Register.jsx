import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Register() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("* In-Valid Email")
      .required("* Email Is Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/^\S*$/, "Password must not contain whitespace"),
    username: Yup.string().required("* Username Is Required"),
  });
  const handleSignUp = async (values) => {
    const { email, password, username } = values;
    let userData = {
      email,
      password,
      username,
    };
    console.log(userData);
  };
  return (
    <div className="form-parent">
      <main className="form-auth">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSignUp}
        >
          {({ errors, touched }) => (
            <Form>
              <h1 className="become-member">become a member</h1>
              <p className="become-title">
                To become a G-Star member, please sign up for free.
              </p>
              <span>Login info</span>
              <div className="form-floating">
                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className={`form-control ${
                    touched.username && errors.username ? "is-invalid" : ""
                  }`}
                />
                <label htmlFor="username">Username</label>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-floating">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                />
                <label htmlFor="email">Email address</label>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-floating">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />

                <label htmlFor="password">Password</label>
                {errors.password && touched.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
                {touched.password && !errors.password && (
                  <div style={{ color: "green" }}>
                    All password requirements met.
                  </div>
                )}
              </div>
              <button type="submit" className="btn-auth">
                create now
              </button>
              <div className="already_have mt-2">
                Already have an account
                <a href="/login" className="ms-1">
                  Login
                </a>
              </div>
              <p className="mt-5 mb-3 text-muted">&copy; 2023–2024</p>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}
