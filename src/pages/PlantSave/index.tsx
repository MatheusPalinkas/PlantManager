import React, { useState } from 'react';
import {
  Text,
  View,
  Alert,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePiker, {
  Event
} from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { SvgFromUri } from 'react-native-svg';
import { savePlants } from '../../libs/PlantsStorage';
import { Button, CardTip } from '../../components';

import { PlantProps } from '../../libs/PlantsStorage';

import styles from './styles';

interface Params {
  plant: PlantProps
}

export function PlantSave(){
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { plant } = params as Params;

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  function handleChangeTime(
    _: Event,
    dateTime: Date | undefined
  ){
    if(Platform.OS === 'android'){
      setShowDatePicker(oldState => !oldState);
    }

    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰')
    }

    if(dateTime) setSelectedDateTime(dateTime);
  }

  function handleOpenDateTimePickerForAndroid(){
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave(){
    try {
      await savePlants({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });
      navigate("Confirmation", {
        title: 'Tudo certo',
        subTitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });
    } catch (error) {
      Alert.alert('Não foi possivel salvar sua planta 😥');
    }
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.plantInfo}>
        <SvgFromUri 
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          {plant.name}
        </Text>
        <Text style={styles.plantAbout}>
          {plant.about}
        </Text>
      </View>
      <View style={styles.controller}>
        <CardTip 
          description={plant.water_tips}
          style={styles.cardTip}
        />

        <Text style={styles.alertLabel}>
          Ecolha o melhor horário para ser lembrado:
        </Text>
        {showDatePicker && 
          (<DateTimePiker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />)}
        {Platform.OS === "android" && (
          <TouchableOpacity
            style={styles.dataTimePickerButton}
            onPress={handleOpenDateTimePickerForAndroid}
          >
            <Text style={styles.dataTimePickerText}>
              {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
            </Text>
          </TouchableOpacity>
        )}

        <Button
          text="cadastrar planta"
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  )
}