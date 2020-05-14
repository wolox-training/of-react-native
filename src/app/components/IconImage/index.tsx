import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

interface IconImageProps {
  source: number;
}

function IconImage({ source } : IconImageProps) {
  return <Image source={source} style={styles.image} />;
}

export default IconImage;
