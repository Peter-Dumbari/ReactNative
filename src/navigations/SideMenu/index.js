import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Container from "../../components/common/container";
import StylesDrawer from "./StylesDrawer";
import { SETTINGS } from "../../constants/Routename";
import { logoutFn } from "../../context/actions/auth/logoutUser";

const SideMenu = ({ navigation, authDispatch }) => {
  const Logout = () => {
    navigation.toggleDrawer();
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Ok",
        onPress: () => {
          logoutFn()(authDispatch);
        },
      },
    ]);
  };

  const NavMenu = [
    {
      icon: <Text>T</Text>,
      name: "Setting",
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>,
      name: "Logout",
      onPress: Logout,
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require("../../assets/images/applogo.png")}
          style={StylesDrawer.applogo}
        />

        <View style={StylesDrawer.navitembox}>
          {NavMenu.map(({ icon, name, onPress }) => (
            <View key={name}>
              <TouchableOpacity style={StylesDrawer.items} onPress={onPress}>
                {icon}
                <Text style={StylesDrawer.linkname}>{name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
