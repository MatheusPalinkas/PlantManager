import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
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

  function handleSubmit(){
    navigate("Confirmation");
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
