import React from 'react';
import { Image } from 'react-native';
import { number } from 'prop-types';

import styles from './styles';

function IconImage({ source }) {
  return <Image source={source} style={styles.image} />;
}

IconImage.propTypes = {
  source: number
};

export default IconImage;
