import React from 'react';
import {
  Text,
  View,
  Image,
  ViewProps
} from 'react-native';

import WaterdropImg from '../../assets/waterdrop.png';

import styles from './styles';

interface CardTipProps extends ViewProps{
  description: string;
}

export function CardTip({ description, style, ...rest }: CardTipProps) {
  return (
    <View
    {...rest}
    style={[styles.tipContainer, style]}
    >
      <Image
        style={styles.tipImg}
        source={WaterdropImg}
      />
      <Text style={styles.tipText}>
        {description}
      </Text>
    </View>
  );
}

export default CardTip;