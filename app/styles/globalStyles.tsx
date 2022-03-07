import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  touchableButton: {
    backgroundColor: Colors.primary,
    width: "90%",
    margin: 10,
    padding: 20,
    borderRadius: 5,
    justifyContent: "center",
    flexDirection: "row",
  },
});
