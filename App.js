import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LibraryScreen from '@screens/LibraryScreen';
import BookDetailScreen from '@screens/BookDetailScreen';
import CustomHeader from '@components/CustomHeader';
import { ROUTES } from '@constants/routes';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={ROUTES.Library}
          headerMode='float'
          screenOptions= {{
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0, height: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              textTransform: 'uppercase',
            },
            header:( props) => <CustomHeader {...props} />
          }}
        >
          <Stack.Screen name={ROUTES.Library} component={LibraryScreen} />
          <Stack.Screen name={ROUTES.BookDetail} component={BookDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
