import { Platform, SafeAreaView } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return Platform.OS === "ios" ? (
    <SafeAreaView>
      <WebView source={{ url: "https://kigox.vercel.app" }} />
    </SafeAreaView>
  ) : (
    <WebView source={{ url: "https://kigox.vercel.app" }} />
  );
}
