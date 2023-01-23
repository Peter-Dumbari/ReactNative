import { StyleSheet } from "react-native";
import Colors from "../../../assets/theme/Colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    alignItems: "center",
  },

  inputContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },

  label: {
    fontWeight: "bold",
    paddingVertical: 5,
  },
  textInput: {
    flex: 1,
  },

  icon: {
    color: Colors.primary,
  },

  error: {
    color: Colors.danger,
    marginTop: 3,
    fontSize: 12,
  },
});
