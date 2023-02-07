import { StyleSheet } from "react-native";
import Colors from "../../assets/theme/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    marginHorizontal: 40,
    borderRadius: 200,
  },

  imageContainer: {
    width: 170,
    height: 170,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  uploadButton: {
    fontSize: 20,
    marginTop: 10,
    color: Colors.primary,
  },
  Switch_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  Switch_Text: {
    fontWeight: "bold",
  },
});
