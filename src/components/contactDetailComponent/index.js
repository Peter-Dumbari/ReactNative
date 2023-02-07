import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import contactDetailStyles from "./contactDetailStyles";
import ImageComponents from "./ImageComponents";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../common/CustomButton";
import { DEFAULT_IMAGE_URL } from "../../constants/general";
import ImagePicker from "../common/ImagePicker";

const ContactDetailComponent = ({ contact, sheetRef, closeRef, openRef }) => {
  const { contact_picture, countryCode, first_Name, last_Name, phoneNumber } =
    contact;

  const [image, setImage] = React.useState(null);
  const contactdetailsIcons = [
    {
      id: 0,
      name: "Call",
      icon: (
        <Ionicons
          name="call-outline"
          color="black"
          style={contactDetailStyles.icon}
        />
      ),
      onPress: () => {},
    },
    {
      id: 1,
      name: "Text",
      icon: <MaterialIcons name="message" style={contactDetailStyles.icon} />,
      onPress: () => {},
    },
    {
      id: 2,
      name: "Video",
      icon: (
        <MaterialCommunityIcons
          name="video"
          color="black"
          style={contactDetailStyles.icon}
        />
      ),
      onPress: () => {},
    },
  ];

  return (
    <ScrollView style={contactDetailStyles.scrollView}>
      <View style={contactDetailStyles.container}>
        {contact_picture && <ImageComponents src={contact_picture} />}
        {!contact_picture && (
          <View>
            <Image
              source={{ uri: image !== null ? image : DEFAULT_IMAGE_URL }}
              style={contactDetailStyles.defaultImage}
            />
            <TouchableOpacity
              style={contactDetailStyles.addPhotobtn}
              onPress={openRef}>
              {image !== null ? (
                <Text style={contactDetailStyles.addPhotobtnTitle}>
                  Change Image
                </Text>
              ) : (
                <Text style={contactDetailStyles.addPhotobtnTitle}>
                  Add Photo
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={contactDetailStyles.namesContainer}>
        <Text style={contactDetailStyles.first_Name}>{first_Name}</Text>
        <Text style={contactDetailStyles.last_Name}>{last_Name}</Text>
      </View>

      <View style={contactDetailStyles.detailInfos}>
        <View style={contactDetailStyles.hrline}></View>

        <View style={contactDetailStyles.iconBox}>
          {contactdetailsIcons.map(({ id, name, icon, onPress }) => (
            <TouchableOpacity key={id} onPress={onPress}>
              <View style={contactDetailStyles.eachContainer}>
                {icon && icon}
                <Text style={contactDetailStyles.name}>{name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={contactDetailStyles.hrline}></View>
        <View style={contactDetailStyles.callZone}>
          <View style={contactDetailStyles.callContainer}>
            <TouchableOpacity>
              <View style={contactDetailStyles.callContainer}>
                <Ionicons
                  name="call-outline"
                  color="black"
                  style={contactDetailStyles.icon}
                />
                <View style={contactDetailStyles.mobileNumber}>
                  <Text style={contactDetailStyles.phoneNumber}>
                    {phoneNumber}
                  </Text>
                  <Text>Mobile</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={contactDetailStyles.iconContainer}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="video"
                color="black"
                style={contactDetailStyles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="message"
                color="black"
                style={contactDetailStyles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={contactDetailStyles.hrline}></View>
        <View style={contactDetailStyles.skypeNotice}>
          <MaterialCommunityIcons
            name="skype"
            size={24}
            style={contactDetailStyles.skypeLogo}
          />
          <Text>Skype to phone {phoneNumber}</Text>
        </View>
        <View style={contactDetailStyles.hrline}></View>
        <View style={contactDetailStyles.mainContainer}>
          <View style={contactDetailStyles.btnContainer}>
            <CustomButton title="Edith Contact" primary />
          </View>
        </View>
      </View>
      <ImagePicker ref={sheetRef} setImage={setImage} />
    </ScrollView>
  );
};

export default ContactDetailComponent;
