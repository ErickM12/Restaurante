import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Asesoria from '../../modules/asesoria/Asesoria';
import AsesoriaDetail from '../../modules/asesoria/AsesoriaDetail'
const Stack = createStackNavigator();
export default function FavoritesStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Asesoria'
            component={Asesoria}
            options={{title: 'Asesoria'}}
        />
         <Stack.Screen 
            name='AsesoriaDetail'
            component={AsesoriaDetail}
            options={{title: 'Detalle de asesoría'}}
        />
    </Stack.Navigator>
  )
}