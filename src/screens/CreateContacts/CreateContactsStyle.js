import { StyleSheet } from "react-native";
import Colors from "../../assets/theme/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  image: {
    width: 100,
    height: 120,
    alignSelf: "center",
    marginVertical: 40,
    marginHorizontal: 40,
  },

  imageContainer: {
    backgroundColor: Colors.grey,
    width: 170,
    height: 170,
    alignSelf: "center",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
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
