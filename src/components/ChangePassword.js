import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { changePswdAction } from '../actions';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className=" border border-ligth rounded p-5">
        <h1>Change password</h1>
        <Formik
          initialValues={{ currentPswd: '', newPswd: '', confirmPswd: '' }}
          validationSchema={Yup.object({
            currentPswd: Yup.string().required('No password provided.'),
            newPswd: Yup.string().required('Required'),
            confirmPswd: Yup.string()
              .oneOf([Yup.ref('newPswd'), null], 'Passwords must match')
              .required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
            setTimeout(() => {
              resetForm({ values: '' });
              dispatch(changePswdAction(values, () => navigate('/')));
            }, 400);
          }}
        >
          <Form>
            <div className="my-3">
              <label>Current password</label>
              <Field className="form-control" name="currentPswd" type="text" />
              <ErrorMessage name="currentPswd" />
            </div>

            <div className="my-3">
              <label>New password</label>
              <Field className="form-control" name="newPswd" type="text" />
              <ErrorMessage name="newPswd" />
            </div>

            <div className="my-3">
              <label>Confirm password</label>
              <Field className="form-control" name="confirmPswd" type="text" />
              <ErrorMessage name="confirmPswd" />
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
