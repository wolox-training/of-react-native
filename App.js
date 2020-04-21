import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LibraryScreen from '@screens/LibraryScreen';
import BookDetailScreen from '@screens/BookDetailScreen';
import CustomHeader from '@components/CustomHeader';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@constants/colors';

import backButton from '@assets/Navigationbar/ic_back.png';
import icNavbar from '@assets/General/bc_navbar.png';

import styles from './styles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.Library}
        headerMode="float"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: styles.header,
          headerTintColor: COLORS.white,
          headerTitleStyle: styles.headerTitle,
          headerBackImage: () => (
            <Image source={backButton} style={styles.backImage} />
          ),
          header: CustomHeader,
          headerBackground: () => (
            <Image
              source={icNavbar}
              resizeMode="stretch"
              style={[styles.background, StyleSheet.absoluteFill]}
            />
          )
        }}>
        <Stack.Screen
          name={ROUTES.Library.name}
          component={LibraryScreen}
          options={{ title: ROUTES.Library.title }}
        />
        <Stack.Screen
          name={ROUTES.BookDetail.name}
          component={BookDetailScreen}
          options={{ title: ROUTES.BookDetail.title }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
