import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Colors from "../../assets/theme/Colors";
import settingsStyle from "../../screens/Settings/settingsStyle";
import { AntDesign } from "@expo/vector-icons";
import AppModal from "../common/Modal";
import { Ionicons } from "@expo/vector-icons";
import settingsComponentStyle from "./settingsComponentStyle";

const SettingsComponent = ({
  setModalVisible,
  modalVisible,
  settingsOptions,
  prefArr,
  sortName,
}) => {
  return (
    <>
      <AppModal
        title="Sort by"
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        modalBody={
          <View>
            {prefArr.map(({ id, name, selected, onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <View key={id} style={settingsComponentStyle.firstContainer}>
                  {selected && (
                    <Ionicons name="checkmark" size={24} color="black" />
                  )}
                  <Text
                    style={[
                      settingsComponentStyle.text,
                      { paddingLeft: selected ? 10 : 35 },
                    ]}>
                    {name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        }
        modalFooter={<></>}
      />
      <ScrollView style={{ backgroundColor: "#ffff" }}>
        {settingsOptions.map(({ id, title, subTitle, onPress }) => (
          <TouchableOpacity onPress={onPress}>
            <View style={settingsStyle.container_view} key={id}>
              <View>
                <Text style={settingsStyle.title}>{title}</Text>
                {subTitle && (
                  <Text style={settingsStyle.subTitle}>{subTitle}</Text>
                )}
              </View>
              <AntDesign name="right" size={20} style={settingsStyle.icon} />
            </View>
            <View style={{ height: 0.5, backgroundColor: Colors.grey }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
