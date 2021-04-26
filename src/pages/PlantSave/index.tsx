import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/core';
import DateTimePiker, {
  Event
} from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { SvgFromUri } from 'react-native-svg';
import { Button } from '../../components';

import { PlantProps } from '../../libs/IPlantProps';

import WaterdropImg from '../../assets/waterdrop.png';
import styles from './styles';

interface Params {
  plant: PlantProps
}

export function PlantSave(){
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
        <View style={styles.tipContainer}>
          <Image
            style={styles.tipImg}
            source={WaterdropImg}
          />
          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
        </View>

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
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  )
}