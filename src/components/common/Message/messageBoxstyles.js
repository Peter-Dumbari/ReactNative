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
    justifyContent: "space-between",
    width: "100%",
    textAlign: "center",
    padding: 7,
  },

  retrybtn: {
    paddingLeft: 20,
    fontSize: 20,
    alignSelf: "center",
  },

  title: {
    fontSize: 20,
    color: "#fff",
  },
});
