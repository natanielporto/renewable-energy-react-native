import { View, Text } from "react-native";
import { Button } from "./src/components/Atoms/Button/Button";

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View>
      <Text>No Storybook, dummy test of components under.</Text>
      <Button action="Test 1" background="primary" />
      <Button action="Test 2" background="primary" bordered />
      <Button action="Test 3" background="secondary" />
    </View>
  );
}
