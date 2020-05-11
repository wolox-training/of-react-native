import React from 'react';
import { ActivityIndicator } from 'react-native';

const withLoader = (Comp) => ({ loading, size, color, ...props }) => {
  if (loading) {
    return <ActivityIndicator size={size} color={color} />;
  }
  return <Comp {...props} />;
};

export default withLoader;
