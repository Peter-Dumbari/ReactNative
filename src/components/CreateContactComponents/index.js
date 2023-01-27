import { View, Text, Image, TouchableOpacity, Switch } from "react-native";
import React from "react";
import CreateContactsStyle from "../../screens/CreateContacts/CreateContactsStyle";
import Container from "../common/container";
import FormInput from "../common/input/Index";
import CustomButton from "../common/CustomButton";
import CountryPicker from "react-native-country-picker-modal";
import { DEFAULT_IMAGE_URL } from "../../constants/general";
import Colors from "../../assets/theme/Colors";
import ImagePicka from "../../components/common/ImagePicker/";
const CreateContactComponents = ({
  onChangeText,
  form,
  onSubmit,
  setForm,
  error,
  toggleValueChange,
  sheetRef,
  openRef,
  closeRef,
}) => {
  return (
    <View style={CreateContactsStyle.container}>
      <Container>
        <View style={CreateContactsStyle.imageContainer}>
          <Image
            source={{ uri: DEFAULT_IMAGE_URL }}
            style={CreateContactsStyle.image}
          />
          <TouchableOpacity onPress={openRef}>
            <Text style={CreateContactsStyle.uploadButton}>Choose Image</Text>
          </TouchableOpacity>
        </View>

        <FormInput
          label="First Name"
          placeholder="Enter First Name"
          onChangeText={(value) => {
            onChangeText({ name: "firstName", value: value });
          }}
          error={error?.firstName}
        />
        <FormInput
          label="Last Name"
          placeholder="Enter Last Name"
          onChangeText={(value) => {
            onChangeText({ name: "lastName", value: value });
          }}
          error={error.lastName}
        />
        <FormInput
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={(v) => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({ ...form, phoneCode, countryCode: cCode });
              }}
            />
          }
          label="Phone Number"
          icon_position="left"
          onChangeText={(value) => {
            onChangeText({ name: "phoneNumber", value: value });
          }}
          placeholder="Enter Phone Number"
          style={{ paddingLeft: 12 }}
          error={error.phoneNumber}
        />

        <View style={CreateContactsStyle.Switch_container}>
          <Text style={CreateContactsStyle.Switch_Text}>Add to Favorite</Text>
          <Switch
            trackColor={{ false: "#767577", true: Colors.primary }}
            thumbColor="#fff"
            ios_backgroundColor="#3e3e3e"
            value={form.IsFavorite}
            onValueChange={toggleValueChange}
          />
        </View>
        <CustomButton primary title="Create" onPress={onSubmit} />
      </Container>
      <ImagePicka ref={sheetRef} />
    </View>
  );
};

export default CreateContactComponents;
