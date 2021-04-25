export interface EnvironmentsProps{
  key: string;
  title: string;
}

export interface PlantsProps{
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

export interface PaginationPlants {
  plants: PlantsProps[];
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
      plants?: PlantsProps[],
      evironment?: string,
    }
  }
) => PaginationPlants;