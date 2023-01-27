import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";
import ImagePickerStyle from "./ImagePickerStyle";

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {
      name: "Take a Camera",
      icon: (
        <Entypo
          name="camera"
          size={24}
          color="black"
          style={ImagePickerStyle.icon}
        />
      ),
      onPress: () => {},
      id: 0,
    },
    {
      name: "Pick from Gallery",
      icon: (
        <Entypo
          name="image"
          size={24}
          color="black"
          style={ImagePickerStyle.icon}
        />
      ),
      onPress: () => {},
      id: 1,
    },
  ];
  return (
    <View>
      <RBSheet
        ref={ref}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}>
        {options.map(({ name, icon, onPress, id }) => (
          <TouchableOpacity
            key={id}
            onPress={onPress}
            style={ImagePickerStyle.imagecontainer}>
            {icon}
            <Text style={ImagePickerStyle.IconText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </RBSheet>
    </View>
  );
});

export default ImagePicker;
