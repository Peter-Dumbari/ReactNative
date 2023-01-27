import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React from "react";
import AppModal from "../common/Modal";
import { FlatList } from "react-native-gesture-handler";
import MessageBox from "../common/Message";
import Colors from "../../assets/theme/Colors";
import { AntDesign } from "@expo/vector-icons";
import contactComponentStyles from "./contactComponentStyles";
import { CREATE_CONTACT } from "../../constants/Routename";
import { useNavigation } from "@react-navigation/native";

const ContactComponent = ({ modalVisible, setModalVisible, data, loading }) => {
  const { navigate } = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={{ paddingHorizontal: 100, paddingVertical: 100 }}>
        <MessageBox message={"No contact to show"} primary />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const { contact_picture, first_Name, last_Name, phoneNumber, countryCode } =
      item;
    return (
      <TouchableOpacity style={contactComponentStyles.container}>
        <View style={contactComponentStyles.items}>
          {contact_picture ? (
            <Image
              style={{ width: 45, height: 45, borderRadius: 100 }}
              source={{ uri: contact_picture }}
            />
          ) : (
            <View style={contactComponentStyles.imagePlaceholder}>
              <Text style={contactComponentStyles.namesabbrev}>
                {" "}
                {first_Name[0] + last_Name[0]}
              </Text>
            </View>
          )}
          <View style={contactComponentStyles.textHolder}>
            <View style={contactComponentStyles.namesHolder}>
              <Text style={contactComponentStyles.firstName}>{first_Name}</Text>
              <Text style={contactComponentStyles.lastName}>{last_Name}</Text>
            </View>
            <Text style={contactComponentStyles.phoneNumber}>
              {`${countryCode}${phoneNumber}`}
            </Text>
          </View>
        </View>
        <AntDesign name="right" size={17} color={Colors.grey} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View>
        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalBody="Testing is allow always! and it is always allow anytime any moment testing testing testing testing testing microphone w anytime any moment testing testing testing testing testing microphone w anytime any moment testing testing testing testing testing microphone w anytime any moment testing testing testing testing testing microphone w anytime any moment testing testing testing testing testing microphone "
        />

        {loading && (
          <View style={{ paddingHorizontal: 100, paddingVertical: 100 }}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        )}
        {!loading && (
          <FlatList
            renderItem={renderItem}
            data={data}
            ItemSeparatorComponent={() => (
              <View
                style={{ height: 0.5, backgroundColor: Colors.grey }}></View>
            )}
            keyExtractor={(item) => {
              item.id;
            }}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{ paddingVertical: 100 }}></View>}
          />
        )}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}
        style={contactComponentStyles.floatBotton}>
        <AntDesign
          name="plus"
          size={24}
          color="#fff"
          style={{ fontSize: 30, fontWeight: "bold" }}
        />
      </TouchableOpacity>
    </>
  );
};

export default ContactComponent;
