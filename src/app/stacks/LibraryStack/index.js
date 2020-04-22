import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES } from '@constants/routes';
import LibraryScreen from '@screens/LibraryScreen';
import BookDetailScreen from '@screens/BookDetailScreen';
import { stackNavigatorConfig } from '@utils/stackConfig';

const LibraryStack = createStackNavigator();

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

export default LibraryStackScreen;
