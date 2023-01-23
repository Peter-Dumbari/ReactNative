import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import Colors from "../../../assets/theme/Colors";
import messageBoxstyles from "./messageBoxstyles";

const MessageBox = ({
  primary,
  secondary,
  danger,
  message,
  retry,
  retryFn,
  onDismiss,
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
  const [showMessage, setShowMessage] = React.useState(false);

  return (
    <>
      {showMessage ? (
        <TouchableOpacity
          style={[
            messageBoxstyles.button,
            { backgroundColor: getBackGround() },
          ]}>
          <View style={messageBoxstyles.text}>
            <Text style={messageBoxstyles.title}>{message}</Text>
            {retry && !typeof onDismiss === "function" && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={messageBoxstyles.retrybtn}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss == "function" && (
              <TouchableOpacity
                onPress={() => {
                  setShowMessage(false);
                  onDismiss();
                }}>
                <Text>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default MessageBox;
