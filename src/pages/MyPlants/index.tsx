import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  Alert,
  Text,
  View,
} from 'react-native';
import {
  Header,
  CardTip,
  Loading,
  PlantCardSecondary,
 } from '../../components';

import { PlantProps, getPlants, removePlant } from '../../libs/PlantsStorage';

import UserImg from '../../assets/palinkas.png';

import styles from './styles';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FlatList } from 'react-native-gesture-handler';

export function MyPlants(){
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();


  function handleRemove(plant: PlantProps){
    Alert.alert(
      'Remover',
      `Deseja remover a ${plant.name} ?`,
      [{
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim  😥',
        onPress: async () => {
          try {
            const plants = await removePlant(plant.id);
            setMyPlants(plants);
          } catch (error) {
            Alert.alert('Não foi possivel remover! 😥')
          }
        }
      }])
  }
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

  if(loading) return <Loading />;

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
                handleRemove={() => handleRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}