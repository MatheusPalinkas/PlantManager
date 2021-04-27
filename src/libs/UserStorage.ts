import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from '../utils/storageKeys';

export async function saveUser(userName: string) : Promise<void>{
  try {
    await AsyncStorage.setItem(StorageKeys.userName, userName);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUser() : Promise<string>{
  try {
    const userName = await AsyncStorage.getItem(StorageKeys.userName);

    return userName || '';
  } catch (error) {
    throw new Error(error);
  }
}