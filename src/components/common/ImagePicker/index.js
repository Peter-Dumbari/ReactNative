import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";
import ImagePickerStyle from "./ImagePickerStyle";
import * as ImagePicking from "expo-image-picker";

const ImagePicker = React.forwardRef(({ setImage }, ref) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  React.useEffect(() => {
    setImage && setImage(selectedImage);
  }, [selectedImage]);

  const pickImage = async () => {
    let result = await ImagePicking.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  const openCamera = async () => {
    const permissionResult = await ImagePicking.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
    } else {
      const result = await ImagePicking.launchCameraAsync();

      if (!result.canceled) {
        let rslt = result.assets[0].uri;
        setSelectedImage(rslt);
        console.log("result", result);
      } else {
        alert("You did not select any image.");
      }
      return result;
    }
  };

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
      onPress: () => {
        openCamera();
      },
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
      onPress: () => {
        pickImage();
      },
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
