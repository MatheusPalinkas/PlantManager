import React from 'react';
import { SafeAreaView, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import wateringImg from '../../assets/watering.png';

import styles from './styles';

export function Welcome(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie suas plantas de forma fácil</Text>
      <Image
        source={wateringImg}
        style={styles.image}
      /> 
      <Text style={styles.subTitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>></Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
