import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View, Text } from "react-native";
import GiveHelp from "../components/give-help";
import Refugee from "../components/refugee";
import { globalStyles } from "../styles/globalStyles";

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

function RootNavigation({ navigation }: any) {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        style={globalStyles.touchableButton}
        onPress={() => navigation.navigate("Refugee")}
      >
        <Text style={globalStyles.text}>I'm a refugee from Ukraine</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.touchableButton}
        onPress={() => navigation.navigate("GiveHelp")}
      >
        <Text style={globalStyles.text}>I'm here to help</Text>
      </TouchableOpacity>
    </View>
  );
}
