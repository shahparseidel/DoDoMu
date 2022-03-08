import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Button } from "../components";
import GiveHelp from "./giveHelp";
import Refugee from "./refugee";

const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RootNavigation">
        <Stack.Screen
          name="RootNavigation"
          component={RootNavigation}
          options={{ title: "Setup your account" }}
        />
        <Stack.Screen
          name="Refugee"
          component={Refugee}
          options={{ title: "I am refugee from Ukraine" }}
        />
        <Stack.Screen
          name="GiveHelp"
          component={GiveHelp}
          options={{ title: "I am here to provide help" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RootNavigation({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Refugee")}
        title="I am refugee from Ukraine"
      />
      <Button
        onPress={() => navigation.navigate("GiveHelp")}
        title="I'm here to help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
