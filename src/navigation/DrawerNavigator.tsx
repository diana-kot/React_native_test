import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Screens} from './screens/Screens';
import {Colors} from '../styles/Colors';

import CustomDrawer from '../components/CustomDrawer';
import {Home} from '../screens/main/Home';
import {SearchScreen} from '../screens/main/SearchScreen';
import {IconSvgBottomHome} from '../assets/bottomtab/IconSvgBottomHome';
import {IconSvgBottomSearch} from '../assets/bottomtab/IconSvgBottomSearch';
import {IconSvgBottomHomeActive} from '../assets/bottomtab/IconSvgBottomHomeActive';
import {IconSvgBottomAdd} from '../assets/bottomtab/IconSvgBottomAdd';
import {IconSvgBottomLikes} from '../assets/bottomtab/IconSvgBottomLikes';
import {VideoScreen} from '../screens/main/VideoScreen';
import {NotificationScreen} from '../screens/main/NotificationScreen';
import {ProfileScreen} from '../screens/main/ProfileScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: Colors.blue,
        drawerActiveTintColor: Colors.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={Screens.SEARCH}
        component={SearchScreen}
        options={{
          title: 'Поиск',
          drawerIcon: ({focused, color, size}) => <IconSvgBottomSearch />,
        }}
      />
      <Drawer.Screen
        name={Screens.HOME}
        component={Home}
        options={{
          title: 'Главная',
          drawerIcon: ({focused, color, size}) =>
            focused ? <IconSvgBottomHomeActive /> : <IconSvgBottomHome />,
        }}
      />
      <Drawer.Screen
        name={Screens.NOTIFICATION}
        component={NotificationScreen}
        options={{
          title: 'Уведомления',
          drawerIcon: ({focused, color, size}) => <IconSvgBottomLikes />,
        }}
      />
      <Drawer.Screen
        name={Screens.PROFILE}
        component={ProfileScreen}
        options={{
          title: 'Профиль',
          drawerIcon: ({focused, color, size}) => <IconSvgBottomHome />,
        }}
      />
      <Drawer.Screen
        name={Screens.VIDEO}
        component={VideoScreen}
        options={{
          title: 'Видео',
          drawerIcon: ({focused, color, size}) => <IconSvgBottomAdd />,
        }}
      />
    </Drawer.Navigator>
  );
};
