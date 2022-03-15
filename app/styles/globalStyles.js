import { Platform, StatusBar, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    margin: 5,
  },
  caption: {
    fontSize: 18,
    margin: 5,
    // textAlign: "center",
    // textAlignVertical: "center",
    // alignContent: "center",
  },
});
