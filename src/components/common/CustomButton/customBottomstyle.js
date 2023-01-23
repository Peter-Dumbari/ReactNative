import { StyleSheet } from "react-native";
import Colors from "../../../assets/theme/Colors";

export default StyleSheet.create({
  button: {
    height: 42,
    borderRadius: 4,
    alignSelf: "center",
    width: "93%",
    marginTop: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-evenly ",
  },

  text: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 10,
    justifyContent: "space-evenly",
  },

  title: {
    fontSize: 20,
  },
});
