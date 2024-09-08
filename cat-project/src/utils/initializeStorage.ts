import { LOCAL_STORAGE_KEY } from './storage';
import staticData from '../constants/data.json';

export const initializeStorage = () => {
  // Check if data already exists in local storage
  const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  // If no data exists, initialize local storage with static data
  if (!existingData) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(staticData));
  }
};
