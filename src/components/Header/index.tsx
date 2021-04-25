import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from '../../utils/storageKeys';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface HeaderProps{
  userImg: any,
}

export function Header({ userImg}: HeaderProps){
  const [userName, setUserName] = useState<string>();

  const loadStorageUserName = useCallback(async() => {
    const user = await AsyncStorage.getItem(StorageKeys.userName);
    
    setUserName(user || '');
  }, []);

  useEffect(() => {
    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image
        source={userImg}
        style={styles.img}
      />
    </View>
  );
}
