module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
    plugins: [
      [
        "module:expo-image-picker",
        {
          photosPermission: "custom photos permission",
          cameraPermission: "Allow $(PRODUCT_NAME) to open the camera",

          "//": "Disables the microphone permission",
          microphonePermission: false,
        },
      ],
    ],
  };
};
