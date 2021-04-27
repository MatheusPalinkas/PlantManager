import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//#region pages
import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';
//#endregion

import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';

const TabRoutes = createBottomTabNavigator();


const AuthRoutes: React.FC = () => (
  <TabRoutes.Navigator
   tabBarOptions={{
     activeTintColor: colors.green,
     inactiveTintColor: colors.heading,
     labelPosition: 'beside-icon',
     style: {
       paddingVertical: 20,
       height: 80,
       alignItems: 'center',
       paddingBottom: 20,
     },
   }}
  >
    <TabRoutes.Screen
      name="Nova Planta"
      component={PlantSelect}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons
            name="add-circle-outline"
            size={size}
            color={color}
          />
        ))
      }}
    />
    <TabRoutes.Screen
      name="Minhas Plantas"
      component={MyPlants}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons
            name="format-list-bulleted"
            size={size}
            color={color}
          />
        ))
      }}
    />
  </TabRoutes.Navigator>
);

export default AuthRoutes;