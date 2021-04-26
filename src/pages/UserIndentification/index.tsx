import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from '../../utils/storageKeys';
import {
  Text,
  View,
  Alert,
  Keyboard,
  Platform,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { Button } from '../../components';

import styles from './styles';

export function UserIndentification(){
  const { navigate } = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit(){
    if(!name) 
      return Alert.alert('Me diz como chamar você 😥');

    try {
      await AsyncStorage.setItem(StorageKeys.userName, name);
      navigate("Confirmation", {
        title: 'Prontinho',
        subTitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch (error) {
      Alert.alert('Não foi possivel salvar o seu nome 😥');
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <View style={styles.alignCenter}>
                <Text style={styles.emoji}>
                {isFilled ? '😄' : '😃'}
                </Text>
                <Text style={styles.title}>Como podemos {'\n'}chamar você?</Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && styles.inputFocused 
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                value={name}
              />
              <View style={styles.footer}>
                <Button
                  text='Confirmar'
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
