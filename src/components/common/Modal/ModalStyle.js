import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    minHeight: 300,
    marginHorizontal: 20,
    borderRadius: 4,
  },

  header: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 21,
  },

  body: {
    minHeight: 200,
    padding: 10,
  },

  body_text: {
    fontSize: 15,
  },

  footerItem: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 6,
  },
  divider_line: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
    marginBottom: 6,
  },
  seperator: {
    width: 7,
    height: 7,
    backgroundColor: "grey",
    alignItems: "baseline",
    borderRadius: 50,
  },

  footer_policy: {
    fontWeight: "bolder",
  },

  footer_text: {
    fontWeight: "bolder",
  },
});
