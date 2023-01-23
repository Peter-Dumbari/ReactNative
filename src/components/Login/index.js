import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Container from "../common/container";
import CustomButton from "../common/CustomButton";
import FormInput from "../common/input/Index";
import loginstyle from "./loginstyle";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/Routename";
import MessageBox from "../common/Message";
import { GlobalContext } from "../../context/Provider";
import { loginFn } from "../../context/actions/auth/login";

const LoginComponent = ({ onSubmit, onChange, error }) => {
  const { navigate } = useNavigation();
  const [show, setShow] = React.useState(true);
  const retry = true;

  return (
    <Container>
      <Image
        source={require("../../assets/images/applogo.png")}
        style={loginstyle.applogo}
      />
      <View>
        <View style={loginstyle.headers}>
          <Text style={loginstyle.headerone}>Lazkcontacts</Text>
          <Text style={loginstyle.headertwo}>Please login</Text>
        </View>
        <View>
          <MessageBox
            message="Login Succesfully"
            primary
            retry={retry}
            retryFn={() => {
              console.log("222222", 222222);
            }}
            onDismiss={() => {}}
          />
          <FormInput
            label="Username"
            icon_position="left"
            placeholder="Usersname"
            onChangeText={(value) => onChange({ name: "userName", value })}
            error={error.userName}></FormInput>
          <FormInput
            label="Password"
            icon={<Text>{show ? "SHOW" : "HIDE"}</Text>}
            icon_position="right"
            placeholder="Enter Password"
            secureTextEntry={show}
            show={show}
            setShow={setShow}
            onChangeText={(value) => onChange({ name: "passWord", value })}
            error={error.passWord}></FormInput>
          <CustomButton
            title="Login Account"
            loading={false}
            disabled={false}
            primary
            onPress={onSubmit}></CustomButton>
        </View>
        <View style={loginstyle.loginnavlink}>
          <Text style={loginstyle.linkquestion}>Not having an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}>
            <Text style={loginstyle.linkbotton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
