import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import inputstyle from "./inputstyle";
import Colors from "../../../assets/theme/Colors";

const FormInput = ({
  style,
  onChangeText,
  value,
  label,
  icon,
  icon_position,
  error,
  show,
  setShow,
  ...props
}) => {
  const [focus, setFocus] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && icon_position) {
      if (icon_position === "right") {
        return "row-reverse";
      } else if (icon_position === "left") {
        return "row";
      }
    } else {
      return "row";
    }
  };

  const getBorderColor = () => {
    if (error) {
      return Colors.danger;
    }
    if (focus) {
      return Colors.primary;
    } else {
      return Colors.grey;
    }
  };
  return (
    <View style={inputstyle.inputContainer}>
      {label && <Text style={inputstyle.label}>{label}</Text>}
      <View
        style={[
          inputstyle.wrapper,
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <View style={inputstyle.icon}>{icon && icon}</View>
        </TouchableOpacity>
        <TextInput
          style={[inputstyle.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          multiline={false}
          {...props}
        />
      </View>
      {error && <Text style={inputstyle.error}>{error}</Text>}
    </View>
  );
};

export default FormInput;
