import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import { Button } from '../../components';

import styles from './styles';

export function Confirmation(){  
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
            <Button text='Começar'/>
          </View>
      </View>
    </SafeAreaView>
  );
}
