import { combineReducers } from 'redux';

// let x = JSON.parse(sessionStorage.getItem('user'));
// console.log('x', x)
// if (!x) {
//   x = null;
// }
const initialValues = {
  loginCredential: JSON.parse(sessionStorage.getItem('user')),
};

const dummy = (state) => {
  return '';
};

export const loginReducers = (state = initialValues, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loginCredential: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  dummy,
  login: loginReducers,
});
