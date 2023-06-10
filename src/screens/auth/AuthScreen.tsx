import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {useFormik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';

import { Screens } from '../../navigation/screens/Screens';

import {Login} from '../../redux/action';

import {TextC, AgEnum} from '../../UI/Text';

import Input from '../../components/ui/Input';
import {Button} from '../../components/ui/Button';
import ErrorMessage from '../../UI/ErrorMessage';

// import {LoaderFlex} from '../../components/ui/Loader';

export const AuthScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .label('Email')
        .email('Enter a valid email')
        .required('Обязательно для заполнения'),
      password: yup
        .string()
        .required('Обязательно для заполнения')
        .min(8, 'Минимальный пароль содержит 8 символов'),
    }),
    onSubmit: async values => {
      if (!formLogin.errors.email && !formLogin.errors.password) {
        dispatch(Login(formLogin.values.email, formLogin.values.password));
      }
    },
  });

  // if (authStore.loader) {
  //   return <LoaderFlex />;
  // }

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View>
          <TextC align={'center'} style={styles.title} Ag={AgEnum.H1}>
            Вход
          </TextC>

          <View style={{marginTop: 32}}>
            <Input
              name="Email"
              label="Email"
              value={formLogin.values.email}
              placeholder="Email"
              onChangeText={formLogin.handleChange('email')}
              error={''}
            />
            <ErrorMessage
              errorValue={formLogin.touched.email && formLogin.errors.email}
            />
            <Input
              name="password"
              secureTextEntry
              label="Password"
              value={formLogin.values.password}
              onChangeText={formLogin.handleChange('password')}
              placeholder="Пароль"
              marginTop={0}
            />
            <ErrorMessage
              errorValue={
                formLogin.touched.password && formLogin.errors.password
              }
            />
            <Button title={'Войти'} onPress={formLogin.handleSubmit} />
          </View>
          <View>
            <TextC align={'left'} Ag={AgEnum.SUBTITLE_STRONG}>
              У Вас еще нет аккаунта?
            </TextC>

            <TouchableOpacity
              onPress={() => navigation.navigate(Screens.REGISTRATION)}>
              <TextC align={'center'} Ag={AgEnum.SUBTITLE}>
                Зарегистрироваться
              </TextC>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 64,
  },
  main: {
    flex: 1,
    padding: 16,
  },
});
