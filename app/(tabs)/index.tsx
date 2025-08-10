import { StyleSheet, View } from "react-native";
import { PerformApiAction } from "@/components/page/home";
import { WelcomeMessage } from "@/components/page/home/WelcomeMessage";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <WelcomeMessage />
      <PerformApiAction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
