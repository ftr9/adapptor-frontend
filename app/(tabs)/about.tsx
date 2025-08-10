import { StyleSheet, View } from "react-native";
import { Text } from "@/components/core";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Agora ❤️</Text>

      {/*
        Empowering agricultural buyers and sellers to communicate directly,
        streamline transactions, and reduce costs.*/}

      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        This is Full Stack Coding Exercise for Agora Livestock app 🐄 🐑 🐓
      </Text>
      <Text>Built with React Native + EXPO</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
