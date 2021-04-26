import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import { Button } from '../../components';

import styles from './styles';

type  icon =  'smile' | 'hug';
interface Params {
  title: string;
  subTitle: string;
  buttonTitle: string;
  icon: icon;
  nextScreen: string;
}

const emojis: Record<icon, string> = {
  'smile': '😄',
  'hug': '🤗',
}

export function Confirmation(){  
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const {
    icon,
    title,
    subTitle,
    nextScreen,
    buttonTitle,
  } = params as Params;

  function handleMoveOn(){
    navigate(nextScreen);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
          <Text style={styles.emoji}>
            {emojis[icon]}
          </Text>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subTitle}>
            {subTitle}
          </Text>
          <View style={styles.footer}>
            <Button
              text={buttonTitle}
              onPress={handleMoveOn}
            />
          </View>
      </View>
    </SafeAreaView>
  );
}
