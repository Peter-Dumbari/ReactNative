import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CONTACT_DETAIL,
  CONTACT_LISTS,
  CREATE_CONTACT,
  SETTINGS,
} from "../constants/Routename";
import ContactDetails from "../screens/ContactDetail";
import Contacts from "../screens/Contacts";
import CreateContacts from "../screens/CreateContacts";
import Settings from "../screens/Settings";
import { StyleSheet, View } from "react-native";
import Colors from "../assets/theme/Colors";
import { getHeaderTitle } from "@react-navigation/elements";

const HomeNavigator = () => {
  const Home = createNativeStackNavigator();

  return (
    <Home.Navigator
      initialRouteName={CONTACT_LISTS}
      screenOptions={{
        headerShown: true,
      }}>
      <Home.Screen name={CONTACT_LISTS} component={Contacts}></Home.Screen>
      <Home.Screen
        name={CONTACT_DETAIL}
        component={ContactDetails}></Home.Screen>
      <Home.Screen
        name={CREATE_CONTACT}
        component={CreateContacts}></Home.Screen>
      <Home.Screen name={SETTINGS} component={Settings}></Home.Screen>
    </Home.Navigator>
  );
};

export default HomeNavigator;
