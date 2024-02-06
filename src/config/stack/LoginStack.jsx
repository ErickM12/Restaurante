import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/auth/login/adapters/screens/Login";
import CreateAccount from "../../modules/auth/account/adapters/screens/CreateAccount";
import UserGuest from "../../modules/auth/login/adapters/screens/UserGuest";

const Stack = createStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="UserGuest">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Inicia sesión" }}
      />
      <Stack.Screen 
        name="CreateAccount"
        component={CreateAccount}
        options={{title: 'Crea tu cuenta'}}
      />
      <Stack.Screen 
        name="UserGuest"
        component={UserGuest}
        options={{title: '¡vamos, crea tu cuenta!'}}
      />
    </Stack.Navigator>
  );
}
