import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import api from '../../services/api';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import {
  Header,
  PlantCardPrimary,
  EnviromentButton,
} from '../../components';

import UserImg from '../../assets/palinkas.png';

import styles from './styles';

interface EnvironmentsProps{
  key: string;
  title: string;
}

interface PlantsProps{
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelect() {
  const [activeEnvironment, setActiveEnvironment] = useState('all');
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);


  function handleEnviromentSelect(enviroment: string){
    setActiveEnvironment(enviroment);

    if(enviroment === 'all') {
      setFilteredPlants(plants);
      return;
    }

    const filtered = plants.filter(plant => plant.environments.includes(enviroment));
    setFilteredPlants(filtered);
  }

  const fetchEnviroment = useCallback(async () => {
    const sort = `_sort=title&_order=asc`;
    const { data } = await api.get(`/plants_environments?${sort}`);
    setEnvironments([{
      key: 'all',
      title: 'Todos',
    },
    ...data
    ]);
  }, []);

  const fetchPlants = useCallback(async () => {
    const sort = `_sort=name&_order=asc`;
    const { data } = await api.get(`/plants?${sort}`);
    setPlants(data);
    setFilteredPlants(data)
  }, []);
  
  useEffect(() => {
    fetchEnviroment();
    fetchPlants();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header
          userName="Palinkas"
          userImg={UserImg}
        />
        <Text style={styles.title}>Em qual ambiente</Text> 
        <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          horizontal
          data={environments}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
          renderItem={({ item }) => (
            <EnviromentButton
              key={item.key}
              title={item.title}
              active={item.key=== activeEnvironment}
              onPress={() => handleEnviromentSelect(item.key)}
            />
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.plantsList}
          renderItem={({ item }) => (
            <PlantCardPrimary
              key={item.id}
              data={item}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
