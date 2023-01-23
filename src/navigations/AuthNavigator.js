import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/Register";
import { LOGIN, REGISTER } from "../constants/Routename";
import Login from "../screens/Login";

const AuthNavigator = () => {
  const Auth = createNativeStackNavigator();

  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name={LOGIN} component={Login}></Auth.Screen>
      <Auth.Screen name={REGISTER} component={Signup}></Auth.Screen>
    </Auth.Navigator>
  );
};

export default AuthNavigator;
