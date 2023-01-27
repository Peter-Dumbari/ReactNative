import { StyleSheet } from "react-native";
import Colors from "../../../assets/theme/Colors";

export default StyleSheet.create({
  imagecontainer: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-between",
    paddingVertical: 8,
    alignItems: "center",
    textAlign: "",
  },
  IconText: {
    fontSize: 20,
  },
  icon: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: Colors.primary,
  },
});
