import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import "react-native-gesture-handler";
import Container from "../components/common/container";
import SideMenu from "./SideMenu";
import Colors from "../assets/theme/Colors";
import { GlobalContext } from "../context/Provider";

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const { authDispatch } = useContext(GlobalContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: Colors.primary,
          color: Colors.grey,
        },
      }}
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen
        name="CONTACT APPLICATION"
        component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
