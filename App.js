import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '@components/TabBarIcon';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@constants/colors';
import starActive from '@assets/toolbar/ic_wishlist_active.png';
import starInactive from '@assets/toolbar/ic_wishlist.png';
import libraryActive from '@assets/toolbar/ic_library_active.png';
import libraryInactive from '@assets/toolbar/ic_library.png';
import LibraryScreen from '@screens/LibraryScreen';
import BookDetailScreen from '@screens/BookDetailScreen';
import { stackNavigatorConfig } from '@utils/stackConfig';
import LoginContainerScreen from '@screens/LoginScreen';

const Stack = createStackNavigator();
const LibraryStack = createStackNavigator();
const WishlistStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator
      initialRouteName={ROUTES.Library.name}
      headerMode="float"
      screenOptions={stackNavigatorConfig}>
      <LibraryStack.Screen
        name={ROUTES.Library.name}
        component={LibraryScreen}
        options={{ title: ROUTES.Library.title }}
      />
      <LibraryStack.Screen
        name={ROUTES.BookDetail.name}
        component={BookDetailScreen}
        options={{ title: ROUTES.BookDetail.title }}
      />
    </LibraryStack.Navigator>
  );
}

function WishlistStackScreen() {
  return (
    <WishlistStack.Navigator
      initialRouteName={ROUTES.Wishlist.name}
      headerMode="float"
      screenOptions={stackNavigatorConfig}>
      <WishlistStack.Screen
        name={ROUTES.Wishlist.name}
        component={() => null}
        options={{ title: ROUTES.Wishlist.title }}
      />
    </WishlistStack.Navigator>
  );
}

function TabNavigatorScreen() {
  return (
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={ROUTES.Login.name}
      headerMode="none"
      >
        <Stack.Screen
          name={ROUTES.Login.name}
          component={LoginContainerScreen}
          options={{ title: ROUTES.Login.title }}
        />
        <Stack.Screen
          name={ROUTES.Home.name}
          component={TabNavigatorScreen}
          options={{ title: ROUTES.Home.title }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
