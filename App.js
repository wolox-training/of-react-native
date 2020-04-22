import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LibraryStackScreen from '@stacks/LibraryStack';
import WishlistStackScreen from '@stacks/WishlistStack';

import TabBarIcon from '@components/TabBarIcon';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@constants/colors';

import starActive from '@assets/toolbar/ic_wishlist_active.png';
import starInactive from '@assets/toolbar/ic_wishlist.png';

import libraryActive from '@assets/toolbar/ic_library_active.png';
import libraryInactive from '@assets/toolbar/ic_library.png';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: COLORS.blue,
          inactiveTintColor: COLORS.gray
        }}>
        <Tab.Screen
          name={ROUTES.Library.name}
          component={LibraryStackScreen}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <TabBarIcon
                active={libraryActive}
                inactive={libraryInactive}
                focused={focused}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name={ROUTES.Wishlist.name}
          component={WishlistStackScreen}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <TabBarIcon
                active={starActive}
                inactive={starInactive}
                focused={focused}
                size={size}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
