import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES } from '@constants/routes';
import WishlistScreen from '@screens/WishlistScreen';
import { stackNavigatorConfig } from '@utils/stackConfig';

const WishlistStack = createStackNavigator();

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

export default WishlistStackScreen;
