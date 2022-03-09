import { SafeAreaView } from "react-native";
import Main from "./screens/main";
import { globalStyles } from "./styles/globalStyles";
import i18n from "./locales/i18n"; //required to load translations

export default function App() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Main />
    </SafeAreaView>
  );
}
