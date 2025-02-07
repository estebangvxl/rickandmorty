import { useFonts } from "expo-font";
import { PropsWithChildren } from "react";
import { Text } from "react-native";

export default function FontLoader({ children }: PropsWithChildren) {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("@/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
    // Agrega otras variantes de la fuente aquí
  });

  if (!fontsLoaded) {
    return <Text>Cargando fuentes...</Text>;
  }

  return children;
}
