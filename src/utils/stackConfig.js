import React from 'react';

import { COLORS } from '@constants/colors';
import backButton from '@assets/Navigationbar/ic_back.png';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader';
import IconImage from '@components/IconImage';

export const stackNavigatorConfig = {
  gestureEnabled: true,
  headerStyle: {
    height: 80
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    textTransform: 'uppercase'
  },
  headerBackImage: () => <IconImage source={backButton} />,
  header: CustomHeader,
  headerBackground: Background
};
