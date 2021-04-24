import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface HeaderProps{
  userName: string,
  userImg: any,
}

export function Header({ userName, userImg}: HeaderProps){
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image
        source={UserImg}
        style={styles.img}
      />
    </View>
  );
}
