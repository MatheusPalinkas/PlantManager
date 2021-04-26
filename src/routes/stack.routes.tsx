import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//#region pages
import { Welcome } from '../pages/Welcome';
import { UserIndentification } from '../pages/UserIndentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
//#endregion

import colors from '../styles/colors';

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
      component={PlantSelect}
    />
    <StackRoutes.Screen 
      name="PlantSave"
      component={PlantSave}
    />
  </StackRoutes.Navigator>
);

export default AppRoutes;