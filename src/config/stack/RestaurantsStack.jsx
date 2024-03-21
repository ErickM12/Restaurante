import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from '../../modules/restaurants/adapters/screens/Restaurants';
import RestaurantDetail from "../../modules/restaurants/adapters/screens/RestaurantDetail";
const Stack = createStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Restaurants"
        component={Restaurants}
        options={{title: 'Restaurantes'}}
      />
      <Stack.Screen 
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{title: 'Descripción del restaurante'}}
      />
    </Stack.Navigator>
  );
}
