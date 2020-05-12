import React, { ComponentType } from 'react';
import { ActivityIndicator } from 'react-native';

export interface LoaderProps {
  color: string,
  size: number | "small" | "large",
  loading: boolean;
}

const withLoader = <P extends object> (Comp : ComponentType<P>) => ({ loading, size, color, ...props } : LoaderProps) => {
  if (loading) {
    return <ActivityIndicator size={size} color={color} />;
  }
  return <Comp {...props as P} />;
};

export default withLoader;
