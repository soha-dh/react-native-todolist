import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Lets, go</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
