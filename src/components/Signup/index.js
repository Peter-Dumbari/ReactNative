import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Container from "../common/container";
import CustomButton from "../common/CustomButton";
import FormInput from "../common/input/Index";
import signupstyle from "./signupstyle";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/Routename";

const RegisterComponent = ({
  onSubmit,
  onChange,
  error,
  setError,
  form,
  setForm,
  show,
  setShow,
}) => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Image
        source={require("../../assets/images/applogo.png")}
        style={signupstyle.applogo}
      />
      <View>
        <View style={signupstyle.headers}>
          <Text style={signupstyle.headerone}>Contact</Text>
          <Text style={signupstyle.headertwo}>Create a free account</Text>
        </View>
        <View>
          <FormInput
            label="Username"
            icon_position="left"
            placeholder="Username"
            onChangeText={(value) => onChange({ name: "userName", value })}
            error={error.userName}></FormInput>
          <FormInput
            label="Firstname"
            icon_position="left"
            placeholder="Firstname"
            onChangeText={(value) => onChange({ name: "firstName", value })}
            error={error.firstName}></FormInput>
          <FormInput
            label="Lastname"
            icon_position="left"
            placeholder="Lastname"
            onChangeText={(value) => onChange({ name: "lastName", value })}
            error={error.lastName}></FormInput>
          <FormInput
            label="Email Address"
            icon_position="left"
            placeholder="Enter Email"
            onChangeText={(value) => onChange({ name: "emailAdress", value })}
            error={error.emailAdress}></FormInput>
          <FormInput
            label="Password"
            icon={<Text>{show ? "SHOW" : "HIDE"}</Text>}
            icon_position="right"
            placeholder="Enter Password"
            secureTextEntry={show}
            onChangeText={(value) => onChange({ name: "passWord", value })}
            error={error.passWord}
            setShow={setShow}
            show={show}></FormInput>
          <CustomButton
            title="Create Account"
            loading={false}
            primary
            onPress={onSubmit}></CustomButton>
        </View>
        <View style={signupstyle.loginnavlink}>
          <Text style={signupstyle.linkquestion}>Already Registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}>
            <Text style={signupstyle.linkbotton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
