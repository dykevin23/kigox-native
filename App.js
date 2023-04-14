import { Platform, SafeAreaView } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        source={{ url: "https://kigox.vercel.app" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: (Platform.OS = "android" ? 25 : 0),
  },
  webview: {
    flex: 1,
  },
});
