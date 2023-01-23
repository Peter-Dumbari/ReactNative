import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import Colors from "../../../assets/theme/Colors";
import customBottomstyle from "./customBottomstyle";

const CustomButton = ({
  title,
  loading,
  disabled,
  primary,
  secondary,
  danger,
  onPress,
  ...props
}) => {
  const getBackGround = () => {
    if (primary) {
      return Colors.primary;
    } else if (secondary) {
      return Colors.secondary;
    } else if (danger) {
      return Colors.danger;
    } else {
      return Colors.grey;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[customBottomstyle.button, { backgroundColor: getBackGround() }]}>
      <View style={customBottomstyle.text}>
        {loading && <ActivityIndicator />}
        {title && (
          <Text
            style={[
              customBottomstyle.title,
              { backgroundColor: disabled && Colors.grey },
            ]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
