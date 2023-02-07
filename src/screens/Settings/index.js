import React from "react";
import { Text, View } from "react-native";
import SettingsComponent from "../../components/settingsComponent";

const Settings = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sortName, setSortName] = React.useState(null);
  const saveSettings = (key, value) => {};

  const settingsOptions = [
    {
      id: 0,
      title: "My info",
      subTitle: "Setup your profile",
      onPress: () => {},
    },
    {
      id: 1,
      title: "Account",
      subTitle: null,
      onPress: () => {},
    },
    {
      id: 2,
      title: "Default account for new contacts",
      subTitle: "example@example.example",
      onPress: () => {},
    },
    {
      id: 3,
      title: "Contact to display",
      subTitle: "All contacts",
      onPress: () => {},
    },
    {
      id: 4,
      title: "Sort by",
      subTitle: "First Name",
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 5,
      title: "Name format",
      subTitle: "First Name first",
      onPress: () => {},
    },
    {
      id: 6,
      title: "Import ",
      subTitle: null,
      onPress: () => {},
    },
    {
      id: 7,
      title: "Export ",
      subTitle: null,
      onPress: () => {},
    },
    {
      id: 8,
      title: "Blocked numbers ",
      subTitle: null,
      onPress: () => {},
    },
    {
      id: 9,
      title: "About us ",
      subTitle: null,
      onPress: () => {},
    },
  ];

  const prefArr = [
    {
      id: 0,
      name: "First Name",
      selected: sortName === "First Name",
      onPress: () => {
        setSortName("First Name");
        setModalVisible(false);
      },
    },
    {
      id: 1,
      name: "Last Name",
      selected: sortName === "Last Name",
      onPress: () => {
        setSortName("Last Name");
        setModalVisible(false);
      },
    },
  ];
  return (
    <SettingsComponent
      settingsOptions={settingsOptions}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      prefArr={prefArr}
      sortName={sortName}
    />
  );
};

export default Settings;
