import React, { useRef } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ContactDetailComponent from "../../components/contactDetailComponent";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import contactDetailStyle from "./contactDetailStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

const ContactDetails = () => {
  const sheetRef = useRef(null);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const { params: { item = {} } = {} } = useRoute();

  const { setOptions } = useNavigation();

  React.useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_Name + " " + item.last_Name,
        headerRight: () => {
          return (
            <View
              style={[
                contactDetailStyle.headerIcon,
                { paddingLeft: 20, opacity: 0.4 },
              ]}>
              <TouchableOpacity>
                <FontAwesome name="star-o" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons name="delete" size={20} color="black" />
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, []);
  return (
    <ContactDetailComponent
      contact={item}
      sheetRef={sheetRef}
      closeRef={closeSheet}
      openRef={openSheet}
    />
  );
};

export default ContactDetails;
