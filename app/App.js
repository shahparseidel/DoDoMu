import { SafeAreaView } from "react-native";
import Main from "./screens/main";
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Main />
    </SafeAreaView>
  );
}
