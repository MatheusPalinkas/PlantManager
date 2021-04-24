import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
  text: string,
}

import styles from './styles';

export function Button({ text, ...props }: ButtonProps){
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={.5}
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}