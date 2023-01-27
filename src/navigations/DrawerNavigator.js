import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import "react-native-gesture-handler";
import Container from "../components/common/container";
import SideMenu from "./SideMenu";
import Colors from "../assets/theme/Colors";
import { GlobalContext } from "../context/Provider";
import { Ionicons } from "@expo/vector-icons";
import { HOME_NAVIGATOR } from "../constants/Routename";
import { getHeaderTitle } from "@react-navigation/elements";

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const { authDispatch } = useContext(GlobalContext);

  const headerOptions = {
    drawerIcon: () => {
      <Text>Hello</Text>;
    },
  };

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerStyle: {
          backgroundColor: Colors.primary,
          color: Colors.grey,
        },
        headerLeft: (props) => (
          <Ionicons
            name="menu"
            size={24}
            color="black"
            onPress={navigation.toggleDrawer}
            style={{ paddingLeft: 10, color: Colors.primary }}
          />
        ),
      })}
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={headerOptions}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
