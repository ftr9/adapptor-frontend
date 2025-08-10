import { Text } from "@/components/core";
import { useFetch } from "@/hooks/useFetch";
import { StyleSheet, View } from "react-native";

export const WelcomeMessage = () => {
  const { isFetching, data, error } = useFetch<string>("/welcome");

  if (isFetching) {
    return <Text>Fetching ...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Text type="primary" style={styles.title}>
      {data}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});
