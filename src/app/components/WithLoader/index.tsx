import React, { ComponentType, ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';

export interface LoaderProps {
  color: string,
  size: number | "small" | "large",
  loading: boolean;
  children?: ReactNode
}

const withLoader = <P extends any> (Comp : ComponentType<P>) => ({ loading, size, color, ...props } : P & LoaderProps) => {
  if (loading) {
    return <ActivityIndicator size={size} color={color} />;
  }
  return <Comp {...props as P} />;
};

export default withLoader;
