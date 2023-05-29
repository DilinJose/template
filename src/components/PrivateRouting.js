import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRouting = () => {
  const { loginCredential } = useSelector((state) => state.login);
  return loginCredential ? <Outlet /> : <Navigate to="/" />;
};
