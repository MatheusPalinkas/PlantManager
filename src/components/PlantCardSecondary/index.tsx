import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { Text, View } from 'react-native';

interface PlantCardSecondaryProps extends RectButtonProps{
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

import styles from './styles';

export function PlantCardSecondary({
  data,
  ...props
}: PlantCardSecondaryProps){
  return (
    <RectButton
      style={styles.container}
      activeOpacity={.5}
      {...props}
    >
      <SvgFromUri
        uri={data.photo}
        width={60}
        height={60}
      />
      <Text style={styles.title}>
        {data.name}
      </Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>
          Regar às 
        </Text>
        <Text style={styles.time}>
          {data.hour}
        </Text>
      </View>
    </RectButton>
  );
}