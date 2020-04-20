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

const backButton = require('@assets/Navigationbar/ic_back.png');
const icNavbar = require('@assets/General/bc_navbar.png');

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.Library}
        headerMode="float"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            height: 80
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            textTransform: 'uppercase'
          },
          headerBackImage: () => (
            <Image source={backButton} style={{ width: 30, height: 30 }} />
          ),
          header: props => <CustomHeader {...props} />,
          headerBackground: () => (
            <Image
              source={icNavbar}
              resizeMode="stretch"
              style={[{ width: '100%' }, StyleSheet.absoluteFill]}
            />
          )
        }}>
        <Stack.Screen name={ROUTES.Library} component={LibraryScreen} />
        <Stack.Screen name={ROUTES.BookDetail} component={BookDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
