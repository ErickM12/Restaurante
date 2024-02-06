import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/auth/login/adapters/screens/Login";
import CreateAccount from "../../modules/auth/account/adapters/screens/CreateAccount";

const Stack = createStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
