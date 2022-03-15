import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

export default function Button({ title, onPress }) {
  const styles = StyleSheet.create({
    buttonText: {
      color: Colors.white,
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

  return (
    <TouchableOpacity style={styles.touchableButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
