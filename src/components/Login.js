import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const LoginSchema = Yup.object().shape({
    // username validation
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('username is Required'),

    // password validation
    pswd: Yup.string()
      .required('Enter the password')
      .min(5, 'password might be minimum 5 character')
      .max(20, 'too long'),
  });

  return (
    <div>
      <section className="background ">
        <div
          className="container-fluid h-custom "
          style={{ marginBottom: '150px',height: `60vh` }}
        >
          <div style={{height: "60vh"}} className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 rounded  border border-light">
              <h1 className="align-center">Login Page</h1>
              <div className="mt-4">
                <Formik
                  initialValues={{
                    // initial values
                    email: '',
                    pswd: '',
                  }}
                  // validation
                  validationSchema={LoginSchema}
                  // on submit values
                  onSubmit={(values, { resetForm }) => {
                    resetForm({ values: '' });

                    dispatch(loginAction(values, () => history('/dashboard')));
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group mb-4 ">
                          {/* <label htmlFor="uname" style={{ fontWeight: '700' }}>
                            Enter username
                          </label> */}
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter Your username"
                          />

                          {errors.email && touched.email ? (
                            <div className="text-danger">{errors.email}</div>
                          ) : null}
                        </div>

                        <div className="form-group mb-4">
                          {/* <label htmlFor="pswd" style={{ fontWeight: '700' }}>
                            Enter Password
                          </label> */}
                          <input
                            type="password"
                            className="form-control"
                            id="pswd"
                            name="pswd"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.pswd}
                            placeholder="Enter Your passWord"
                          />

                          {errors.pswd && touched.pswd ? (
                            <div className="text-danger">{errors.pswd}</div>
                          ) : null}
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                          {/* <Link to="/" className="btn btn-secondary">
                            Back
                          </Link> */}
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                          Don't have an account?{' '}
                          <Link to={'/signup'}>Sign Up</Link>
                        </div>
                      </form>
                    </>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
