import { getData, patchData, postData } from '../api/Services';
import Login from '../components/Login';
import { encryptPassword, validatePassword } from '../HashPassword';

export const SignupAction = (data, history) => async (dispatch) => {
  const { data: signupData } = await getData('users/', data);

  const user = signupData.find((d) => d.email === data.email);

  if (user) {
    alert('User Already Exists');
  } else {
    let { phNo, ...rest } = data;
    phNo = encryptPassword(phNo);
    let values = { ...rest, phNo };
    await postData('users/', values);
    history('/login');
  }
};

export const loginAction = (values, history) => async (dispatch) => {
  const { data: loginData } = await getData('users/');

  const user = loginData.find((d) => d.email === values.email);
  if (!user) {
    alert("User Doesn't Exist");
  } else {
    if (validatePassword(user.phNo, values.pswd)) {
      sessionStorage.setItem(
        'user',
        JSON.stringify({ currentUser: user.email, status: true })
      );
      dispatch({
        type: 'LOGIN',
        payload: { currentUser: user.email, status: true },
      });
      history();
    } else {
      alert('login failed');
    }
  }
};

export const logoutAction = () => async (dispatch) => {
  await sessionStorage.removeItem('user');
  dispatch({ type: 'LOGIN', payload: null });
};

export const changePswdAction = (values) => async (dispatch) => {
  const { data } = await getData('users');
  const userEmail = JSON.parse(sessionStorage.getItem('user'));
  const user = data.find((d) => d.email === userEmail.currentUser);

  if (values.currentPswd === values.newPswd) {
    alert('Current password and new password are same');
  } else {
    if (validatePassword(user.phNo, values.currentPswd)) {
      let { phNo, ...rest } = user;
      phNo = encryptPassword(values.newPswd);
      rest = { ...rest, phNo };

      await patchData(`users/${user.id}`, rest);
      alert("password Changed")
    }
  }
};
