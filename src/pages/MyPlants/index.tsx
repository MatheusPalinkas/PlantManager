import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { PlantCardSecondary, Header, CardTip } from '../../components';
import { getPlants } from '../../libs/PlantsStorage';

import { PlantProps } from '../../libs/PlantsStorage';

import UserImg from '../../assets/palinkas.png';

import styles from './styles';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FlatList } from 'react-native-gesture-handler';

export function MyPlants(){
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();


  const loadStorageData = useCallback(async() => {
    const plantsStoraged = await  getPlants();
    const nextTime = formatDistance(
      new Date(plantsStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale:  ptBR }
    );

    setNextWaterd(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`)
    setMyPlants(plantsStoraged);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadStorageData();
  }, [loadStorageData]);

  return (
    <View style={styles.container}>
      <Header 
        userImg={UserImg}
      />

      <CardTip
        description={nextWaterd || ''}
      />

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <View
          style={styles.myPlantsContainer}
        >
          <FlatList
            data={myPlants}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PlantCardSecondary 
                data={item}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}