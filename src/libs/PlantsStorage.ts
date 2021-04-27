import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from '../utils/storageKeys';
import { format } from 'date-fns';

export interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  },
  dateTimeNotification: Date;
}

export interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
  }
}

function plantsSorted(plants: StoragePlantProps): PlantProps[]{
  const plantsSorted = Object
  .keys(plants)
  .map(plant => ({
    ...plants[plant].data,
    hour: format(
      new Date(plants[plant].data.dateTimeNotification),
      "HH:mm"
    ),
  }))
  .sort((a, b) =>
    Math.floor(
      new Date(a.dateTimeNotification).getTime() / 1000 -
      Math.floor(new Date(b.dateTimeNotification).getTime() / 1000
    )
  ));

  return plantsSorted;
}
export async function savePlants(plant: PlantProps) : Promise<void>{
  try {
    const data = await AsyncStorage.getItem(StorageKeys.plans);
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
      }
    };

    await AsyncStorage.setItem(
      StorageKeys.plans, 
      JSON.stringify({
        ...newPlant,
        ...oldPlants
      }));
  } catch (error) {
    throw new Error(error);
  }
}

export async function getPlants() : Promise<PlantProps[]>{
  try {
    const data = await AsyncStorage.getItem(StorageKeys.plans);
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

      return plantsSorted(plants);
  } catch (error) {
    throw new Error(error);
  }
}

export async function removePlant(plantId: string) : Promise<PlantProps[]>{
  try {
    const data = await AsyncStorage.getItem(StorageKeys.plans);
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    delete plants[plantId];

    await AsyncStorage.setItem(
      StorageKeys.plans, 
      JSON.stringify({
        ...plants
      }));
    
      return plantsSorted(plants);
  } catch (error) {
    throw new Error(error);
  }
}