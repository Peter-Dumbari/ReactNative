import { StyleSheet } from "react-native";
import Colors from "../../assets/theme/Colors";

export default StyleSheet.create({
  container_view: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    paddingTop: 5,
    opacity: 0.6,
  },

  icon: {
    fontSize: 18,
    opacity: 0.6,
  },
});
