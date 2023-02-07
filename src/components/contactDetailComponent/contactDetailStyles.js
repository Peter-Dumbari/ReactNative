import { StyleSheet } from "react-native";
import Colors from "../../assets/theme/Colors";
export default StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffff",
  },
  container: {
    flex: 1,
  },

  detailPhoto: {
    width: "100%",
    height: 300,
    resizeMode: "cover ",
  },

  namesContainer: {
    flexDirection: "row",
    padding: 20,
  },

  first_Name: {
    fontSize: 30,
    fontWeight: "bold",
    opacity: 0.6,
  },

  last_Name: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: "bold",
    opacity: 0.6,
  },

  detailInfos: {},

  hrline: {
    height: 10,
    borderBottomWidth: 0.4,
  },
  iconBox: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    padding: 20,
    justifyContent: "space-between",
  },

  name: {
    fontSize: 15,
  },
  icon: {
    fontSize: 30,
    marginBottom: 6,
    color: Colors.primary,
  },
  eachContainer: {
    alignItems: "center",
  },

  callZone: {
    flexDirection: "row",
    padding: 13,
  },
  callContainer: {
    flexDirection: "row",
    flex: 2,
  },

  mobileNumber: {
    marginLeft: 20,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  phoneNumber: {
    fontSize: 15,
    fontWeight: "bold",
  },

  skypeNotice: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  skypeLogo: {
    color: Colors.primary,
    marginRight: 20,
  },

  mainContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 60,
    paddingRight: 15,
  },
  btnContainer: {
    width: "50%",
  },

  defaultImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },

  addPhotobtn: {
    position: "absolute",
    bottom: 100,
    left: 170,
  },
  addPhotobtnTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
