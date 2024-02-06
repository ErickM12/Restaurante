import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginStack from "../stack/LoginStack";
import FavoritesStack from "../stack/FavoritesStack";
import RestaurantsStack from '../stack/RestaurantsStack';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
          name="RestaurantsStack"
          component={RestaurantsStack}
          options={{ title: "Inicio" }}
        />
         <Tab.Screen
          name="FavoritesStack"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="LoginStack"
          component={LoginStack}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
