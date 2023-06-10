import AsyncStorage from '@react-native-async-storage/async-storage';

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    console.log('token', token)
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      });
    }
  };
};

export const Login = (username, password) => {
 console.log(username, password)
  return async dispatch => {
    let token = null;
    if (username === 'dd@mail.ru' && password === 'cbvfrjn123') {
      token = username + password;
      await AsyncStorage.setItem('token', token);
      console.log('token stored');
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
    });
  };
};

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
