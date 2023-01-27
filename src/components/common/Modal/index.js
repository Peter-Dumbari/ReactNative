import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import ModalStyle from "./ModalStyle";
import { EvilIcons } from "@expo/vector-icons";

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity style={ModalStyle.wrapper}>
        <View style={ModalStyle.modalView}>
          <ScrollView>
            <View>
              <View style={ModalStyle.header}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <EvilIcons name="close" size={27} color="black" />
                </TouchableOpacity>
                <Text style={ModalStyle.title}>{title || "Lcontacts"}</Text>
                <View />
                <View />
              </View>
              <View style={ModalStyle.divider_line}></View>

              <View style={ModalStyle.body}>
                <Text style={ModalStyle.body_text}>{modalBody}</Text>
              </View>

              {modalFooter}
              {!modalFooter && (
                <>
                  <View style={ModalStyle.divider_line}></View>
                  <View style={ModalStyle.footerItem}>
                    <View style={ModalStyle.footer_policy}>
                      <Text>Privacy policy</Text>
                    </View>
                    <View style={ModalStyle.seperator}></View>
                    <View style={ModalStyle.footer_text}>
                      <Text>Terms of Service</Text>
                    </View>
                  </View>
                </>
              )}
            </View>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
