import { View, Text, SafeAreaView } from "react-native";
import { Input } from "./src/components/Atoms/Input/Input";

import {
  useFonts,
  Sora_100Thin,
  Sora_200ExtraLight,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
  Sora_800ExtraBold,
} from "@expo-google-fonts/sora";
import { Label } from "./src/components/Atoms/Label/Label";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,
  });

  if (!fontsLoaded)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <SafeAreaView>
      <View>
        <Text style={{ marginBottom: "10%" }}>
          No Storybook, dummy test of components under.
        </Text>
        <View>
          <Label label="Email" />
          <Input placeholder="email" />
        </View>
        <View>
          <Label label="Password" />
          <Input placeholder="email" type="password" />
        </View>
      </View>
    </SafeAreaView>
  );
}
