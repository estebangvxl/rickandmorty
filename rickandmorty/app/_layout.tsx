import { Slot } from "expo-router";
import "./../assets/styles/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import FontLoader from "@/components/ui/FontLoader";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <FontLoader>
        <Slot />
      </FontLoader>
    </GluestackUIProvider>
  );
}
