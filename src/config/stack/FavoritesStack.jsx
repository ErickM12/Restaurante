import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from '../../modules/favorites/adapters/screens/Favorites'
const Stack = createStackNavigator();
export default function FavoritesStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Favorites'
            component={Favorites}
            options={{title: 'Favoritos'}}
        />
    </Stack.Navigator>
  )
}