import React from 'react';
import { ActivityIndicator } from 'react-native';

const withLoader = (Comp) => ({ loading, size, color, children, ...props }) => {
  if (loading) {
    return <ActivityIndicator size={size} color={color} />;
  }
  return <Comp {...props}>{children}</Comp>;
};

export default withLoader;
