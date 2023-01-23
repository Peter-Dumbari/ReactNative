import { StyleSheet } from "react-native";
import Colors from "../../assets/theme/Colors";

export default StyleSheet.create({
  applogo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 20,
    marginHorizontal: 40,
  },

  headers: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  headerone: {
    fontSize: 23,
    marginBottom: 20,
    fontWeight: "bold",
  },

  headertwo: {
    fontSize: 18,
  },

  loginnavlink: {
    padding: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  linkquestion: {
    fontSize: 16,
  },

  linkbotton: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
