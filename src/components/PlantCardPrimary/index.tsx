import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { Text, Image } from 'react-native';

interface PlantCardPrimaryProps extends RectButtonProps{
  data: {
    name: string;
    photo: string;
  }
}

import styles from './styles';

export function PlantCardPrimary({
  data,
  ...props
}: PlantCardPrimaryProps){
  return (
    <RectButton
      style={styles.container}
      activeOpacity={.5}
      {...props}
    >
      <SvgFromUri
        uri={data.photo}
        width={70}
        height={60}
      />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
}