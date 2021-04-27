import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//#region pages
import { Welcome } from '../pages/Welcome';
import { UserIndentification } from '../pages/UserIndentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
//#endregion

import colors from '../styles/colors';
import AuthRoutes from './tab.routes';

const StackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <StackRoutes.Screen 
      name="Welcome"
      component={Welcome}
    />
    <StackRoutes.Screen 
      name="UserIndentification"
      component={UserIndentification}
    />
    <StackRoutes.Screen 
      name="Confirmation"
      component={Confirmation}
    />
    <StackRoutes.Screen 
      name="PlantSelect"
      component={AuthRoutes}
    />
    <StackRoutes.Screen 
      name="PlantSave"
      component={PlantSave}
    />
    <StackRoutes.Screen 
      name="MyPlants"
      component={AuthRoutes}
    />
  </StackRoutes.Navigator>
);

export default AppRoutes;