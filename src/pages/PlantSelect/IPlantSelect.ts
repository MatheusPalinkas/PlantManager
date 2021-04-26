import { PlantProps } from '../../libs/PlantsStorage';
export interface EnvironmentsProps{
  key: string;
  title: string;
}

export interface PaginationPlants {
  plants: PlantProps[];
  loading: boolean;
  page: number;
  limit: number;
  loadedAll: boolean;
  loadingMore: boolean;
  evironment: string;
}

type actionType = 
  | 'NO-MORE-LOADING'
  | 'LOADING-MORE'
  | 'ADD-PLANTS'
  | 'CHANGE-ENVIRONMENT';

export type reducerPlants = (
  prevState: PaginationPlants,
  action: {
    type: actionType,
    payload?: {
      plants?: PlantProps[],
      evironment?: string,
    }
  }
) => PaginationPlants;