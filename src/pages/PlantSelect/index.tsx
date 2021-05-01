import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
} from 'react';
import { useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {
  Header,
  Loading,
  PlantCardPrimary,
  EnviromentButton,
} from '../../components';
import {
  PaginationPlants,
  EnvironmentsProps,
  reducerPlants,
} from './IPlantSelect';
import { PlantProps } from '../../libs/PlantsStorage';

import UserImg from '../../assets/user.png';

import colors from '../../styles/colors';
import styles from './styles';

const inicialState: PaginationPlants = {
  plants: [],
  loading: true,
  page: 1,
  limit: 8,
  loadedAll: false,
  loadingMore: false,
  evironment: 'all',
}

const reducer: reducerPlants = (state, action) => {
  switch (action.type) {
    case 'NO-MORE-LOADING':
      return { ...state, loadedAll: true};
    case 'ADD-PLANTS':
        return {
          ...state,
          loading: false,
          loadingMore: false,
          plants: state.plants.concat(
            (action.payload && action.payload.plants)
              ? action.payload.plants
              : []
          ),
        };
    case 'CHANGE-ENVIRONMENT':
      return {
        ...inicialState,
        evironment:
          action.payload && action.payload.evironment
            ? action.payload.evironment
            : 'all',
      };
    case 'LOADING-MORE':
      return {
        ...state,
        loadingMore: true,
        page: state.page + 1,
      };
    default:
      return state;
  }
};

export function PlantSelect() {
  const { navigate } = useNavigation();
  const [{
    page,
    limit,
    plants,
    loading,
    loadedAll,
    evironment,
    loadingMore
  }, dispatch] = useReducer(reducer, inicialState);
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([]);


  function handleEnviromentSelect(enviroment: string){
    dispatch({
      type: 'CHANGE-ENVIRONMENT',
      payload: {
        evironment: enviroment
      }
    });
  }

  function handleFetchMore(distance: number){
    if(distance < 1) return;
  
    if(!loadingMore) dispatch({ type: 'LOADING-MORE'});
  }

  function handlePlantSelect(plant: PlantProps){
    navigate('PlantSave', { plant });
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
    if(loadedAll) return;
    
    const sort = `&_sort=name&_order=asc&`;
    const pagination = `&_page=${page}&_limit=${limit}`;
    const filter = evironment === 'all' ? '' : `&environments_like=${evironment}`;
    const { data } = await api.get(`/plants?${filter}${sort}${pagination}`);

    if(!data || data.length <= 0) dispatch({ type: 'NO-MORE-LOADING' });
    

    dispatch({
      type: 'ADD-PLANTS',
      payload: {
        plants: data
      } 
    });
  }, [page, evironment]);
  
  useEffect(() => {
    fetchEnviroment();
  }, [fetchEnviroment]);

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  if(loading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header
          userImg={UserImg}
        />
        <Text style={styles.title}>Em qual ambiente</Text> 
        <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          horizontal
          data={environments}
          keyExtractor={(item) => String(item.key)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
          renderItem={({ item }) => (
            <EnviromentButton
              key={String(item.key)}
              title={item.title}
              active={item.key=== evironment}
              onPress={() => handleEnviromentSelect(item.key)}
            />
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={plants}
          keyExtractor={(item) => String(item.id)}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.plantsList}
          renderItem={({ item }) => (
            <PlantCardPrimary
              key={String(item.id)}
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore
              ? <ActivityIndicator color={colors.green} />
              : <></>
          }
        />
      </View>
    </SafeAreaView>
  );
}
