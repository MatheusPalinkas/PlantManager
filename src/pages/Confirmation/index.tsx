import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import { Button } from '../../components';

import styles from './styles';

export function Confirmation(){  
  const { navigate } = useNavigation();

  function handleMoveOn(){
    navigate("PlantSelect");
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
          <Text style={styles.emoji}>
            😄
          </Text>
          <Text style={styles.title}>Prontinho</Text>
          <Text style={styles.subTitle}>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
          </Text>
          <View style={styles.footer}>
            <Button
              text='Começar'
              onPress={handleMoveOn}
            />
          </View>
      </View>
    </SafeAreaView>
  );
}
