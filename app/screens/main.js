import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Button } from "../components";
import { useTranslation } from "react-i18next";
import GiveHelp from "./giveHelp";
import Refugee from "./refugee";

const Stack = createNativeStackNavigator();
export default function Main() {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RootNavigation">
        <Stack.Screen
          name="RootNavigation"
          component={RootNavigation}
          options={{ title: t("setup_account") }}
        />
        <Stack.Screen
          name="Refugee"
          component={Refugee}
          options={{ title: t("get_help") }}
        />
        <Stack.Screen
          name="GiveHelp"
          component={GiveHelp}
          options={{ title: t("give_help") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RootNavigation({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("Refugee")}
        title={t("get_help")}
      />
      <Button
        onPress={() => navigation.navigate("GiveHelp")}
        title={t("give_help")}
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
