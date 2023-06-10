import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStack} from './stack/MainStack';
import {AuthStack} from './stack/AuthStack';

import {DrawerNavigator} from './DrawerNavigator';
import {Init} from '../redux/action';

import {Colors} from '../styles/Colors';

// import {Screen1} from '../screens/Screen1';
// import {Screen2} from '../screens/Screen2';
// import {ProfileScreen} from '../screens/ProfileScreen';
// import {SearchScreen} from '../screens/main/SearchScreen';
// import {Notes} from '../screens/Notes';
// import {Home} from '../screens/main/Home';
// import ProfileIcon from '../assets/icons/ProfileIcon';

export const Navigator = () => {
  // const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();

  const token = useSelector(state => state.Reducers.authToken);
  const [loading, setLoading] = React.useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  React.useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  return <>{token !== null ? <MainStack /> : <AuthStack />}</>;
};

// const TabStack = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Главная',
//           tabBarIcon: ({color, size, focused}) => {
//             return <ProfileIcon />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Notes"
//         component={Notes}
//         options={{
//           tabBarLabel: 'Заметки',
//           tabBarIcon: ({focused, color, size}) => {
//             return <ProfileIcon />;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// <Stack.Navigator
//   initialRouteName="App"
//   screenOptions={{
//     headerShown: false,
//   }}>
//   <Stack.Screen name={'Tab'} component={TabStack} />
//   <Stack.Screen
//     name="Screen1"
//     component={Screen1}
//     options={{title: 'Главная'}}
//   />
//   <Stack.Screen
//     options={{title: 'Созданиe заказа'}}
//     name="Screen2"
//     component={Screen2}
//   />
//   <Stack.Screen
//     options={{title: 'Профиль'}}
//     name="ProfileScreen"
//     component={ProfileScreen}
//   />
//   <Stack.Screen
//     options={{title: 'Поиск'}}
//     name="SearchScreen"
//     component={SearchScreen}
//   />
// </Stack.Navigator>
