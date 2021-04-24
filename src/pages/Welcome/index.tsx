import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/watering.png';

import styles from './styles';

export function Welcome(){
  const { navigate } = useNavigation();

  function handleStart(){
    navigate("UserIndentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}suas plantas de {'\n'}forma fácil</Text>
      <Image
        source={wateringImg}
        style={styles.image}
        resizeMode="contain"
      /> 
      <Text style={styles.subTitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleStart}
      >
        <Feather
          name="chevron-right"
          style={styles.btnIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
