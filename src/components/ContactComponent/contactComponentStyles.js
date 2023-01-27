import { StyleSheet } from "react-native";
import Colors from "../../assets/theme/Colors";

export default StyleSheet.create({
  items: {
    flexDirection: "row",
    paddingVertical: 9,
    alignItems: "center",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  textHolder: {
    paddingLeft: 12,
  },

  namesHolder: {
    flexDirection: "row",
  },

  firstName: {
    marginRight: 7,
    fontWeight: "700",
    fontSize: 17,
  },

  lastName: {
    marginRight: 7,
    fontWeight: "700",
    fontSize: 17,
  },

  phoneNumber: {
    opacity: 0.6,
    color: Colors.grey,
  },
  imagePlaceholder: {
    width: 45,
    height: 45,
    backgroundColor: Colors.grey,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },

  namesabbrev: {
    fontWeight: "bold",
    color: "#fff",
  },

  floatBotton: {
    position: "absolute",
    bottom: 45,
    right: 45,
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
