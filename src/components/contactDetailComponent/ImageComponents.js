import { View, Text, Image } from "react-native";
import React from "react";
import contactDetailStyles from "./contactDetailStyles";

const ImageComponents = ({ src }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsLoading(false);
  };
  return (
    <View>
      {isLoading && <Text>Image Loading</Text>}
      <Image
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        style={contactDetailStyles.detailPhoto}
        source={{ uri: src }}
      />
    </View>
  );
};

export default ImageComponents;
