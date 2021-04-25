import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

interface EnviromentButtonProps extends RectButtonProps{
  title: string;
  active?: boolean;
}

import styles from './styles';

export function EnviromentButton({
  title,
  active = false,
  ...props
}: EnviromentButtonProps){
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      activeOpacity={.5}
      {...props}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>{title}</Text>
    </RectButton>
  );
}