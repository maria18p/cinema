import React from 'react';
import RegisterView from './RegisterView';
import { addUser } from '../../API/userCalls';

const Register = () => {
  const register = async (username, password) => {
    const userObj = { username: username, password: password };
    if (username === '' || password === '') {
      alert('Fields must be filled');
    } else alert('You are signed up');
    await addUser(userObj);
  };

  return <RegisterView register={register} />;
};

export default Register;
