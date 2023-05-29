import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import { PrivateRouting } from './PrivateRouting';
import Banner from './Banner';
import ChangePassword from './ChangePassword';

const App = () => {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Banner />} />
        <Route element={<PrivateRouting />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
