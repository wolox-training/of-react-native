import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

interface Props {
  source: number;
}

function IconImage({ source }: Props) {
  return <Image source={source} style={styles.image} />;
}

export default IconImage;
