import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LibraryScreen from '@screens/LibraryScreen';
import WishlistScreen from '@screens/WishlistScreen';
import BookDetailScreen from '@screens/BookDetailScreen';
import CustomHeader from '@components/CustomHeader';
import TabBarIcon from '@components/TabBarIcon';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@constants/colors';

import backButton from '@assets/Navigationbar/ic_back.png';
import icNavbar from '@assets/General/bc_navbar.png';
import starActive from '@assets/toolbar/ic_wishlist_active.png';
import starInactive from '@assets/toolbar/ic_wishlist.png';

import libraryActive from '@assets/toolbar/ic_library_active.png';
import libraryInactive from '@assets/toolbar/ic_library.png';

import styles from './styles';

const stackNavigatorConfig = {
  gestureEnabled: true,
  headerStyle: styles.header,
  headerTintColor: COLORS.white,
  headerTitleStyle: styles.headerTitle,
  headerBackImage: () => <Image source={backButton} style={styles.backImage} />,
  header: CustomHeader,
  headerBackground: () => (
    <Image
      source={icNavbar}
      resizeMode="stretch"
      style={[styles.background, StyleSheet.absoluteFill]}
    />
  )
};

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
        component={WishlistScreen}
        options={{ title: ROUTES.Wishlist.title }}
      />
    </WishlistStack.Navigator>
  );
}

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
