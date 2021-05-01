import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications'; 
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
    notificationId: string;
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

    //#region create notification
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();
    const { times, repeat_every } = plant.frequency;

    if(repeat_every === 'week'){
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    }else{
       nextTime.setDate(nextTime.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeey,  🌱',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      }
    });
    //#endregion

    const data = await AsyncStorage.getItem(StorageKeys.plans);
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId: notificationId,
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

    await Notifications.cancelScheduledNotificationAsync(plants[plantId].notificationId);
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