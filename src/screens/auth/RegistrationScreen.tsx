import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';

import {useFormik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';

import ErrorMessage from '../../UI/ErrorMessage';

import {Button} from '../../components/ui/Button';
import Input from '../../components/ui/Input';

export const RegistrationScreen = () => {
  const dispatch = useDispatch();

  const formRegister = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobile: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().label('name').required('Обязательно для заполнения'),
      email: yup
        .string()
        .label('Email')
        .email('Enter a valid email')
        .required('Обязательно для заполнения'),
      password: yup
        .string()
        .required('Обязательно для заполнения')
        .min(8, 'Минимальный пароль содержит 8 символов'),
      confirmPassword: yup
        .string()
        .required('Повторите пароль')
        .oneOf([yup.ref('new_password')], 'Пароли должны совпадать'),
      mobile: yup.string().required('Повторите пароль'),
    }),
    onSubmit: async values => {
      if (!formRegister.errors) {
        // dispatch(Login(values);
        console.log('values', values);
      }
    },
  });
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View>
              <Text style={styles.loginContinueTxt}>Регистрация</Text>
              <View>
                <Input
                  name="name"
                  label="ФИО"
                  value={formRegister.values.name}
                  onChangeText={formRegister.handleChange('name')}
                  placeholder="ФИО"
                />
                <ErrorMessage
                  errorValue={
                    formRegister.touched.name && formRegister.errors.name
                  }
                />

                <Input
                  name="email"
                  label="Email"
                  value={formRegister.values.email}
                  onChangeText={formRegister.handleChange('email')}
                  placeholder="email"
                />
                <ErrorMessage
                  errorValue={
                    formRegister.touched.email && formRegister.errors.email
                  }
                />

                <Input
                  name="password"
                  label="Password"
                  value={formRegister.values.password}
                  onChangeText={formRegister.handleChange('password')}
                  placeholder="Пароль"
                  secureTextEntry
                />
                <ErrorMessage
                  errorValue={
                    formRegister.touched.password &&
                    formRegister.errors.password
                  }
                />

                <Input
                  name="confirmPassword"
                  label="confirmPassword"
                  value={formRegister.values.confirmPassword}
                  onChangeText={formRegister.handleChange('confirmPassword')}
                  placeholder="Повторите пароль"
                  secureTextEntry
                />
                <ErrorMessage
                  errorValue={
                    formRegister.touched.confirmPassword &&
                    formRegister.errors.confirmPassword
                  }
                />

                <Input
                  name="mobile"
                  label="mobile"
                  value={formRegister.values.mobile}
                  onChangeText={formRegister.handleChange('mobile')}
                  placeholder="Номер телефона"
                />
                <ErrorMessage
                  errorValue={
                    formRegister.touched.mobile && formRegister.errors.mobile
                  }
                />

                <Button title={'Войти'} onPress={formRegister.handleSubmit} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1779ba',
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: '#BABBC3',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BABBC3',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: '#1779ba',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: '#cacaca',
    fontWeight: 'bold',
  },
  signupBtn: {
    color: '#1779ba',
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});
