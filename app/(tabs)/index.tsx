import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button } from "@/components";
import { useState } from "react";
import Text from "@/components/Text";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text type="primary" style={styles.title}>
        Welcome to the app
      </Text>
      <View style={{ width: "50%", marginTop: 10 }}>
        <Button
          title="Perform Api Action"
          onPress={() => {
            alert("Hello World");
          }}
        />
      </View>
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
    textAlign: "center",
  },
});
