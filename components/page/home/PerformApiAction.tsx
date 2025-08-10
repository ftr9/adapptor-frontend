import { Button } from "@/components/core";
import { View } from "react-native";
import { BASE_API } from "@/services/api";
import { useState } from "react";
import { AxiosError } from "axios";

export const PerformApiAction = () => {
  return (
    <View style={{ width: "50%", marginTop: 10 }}>
      <Button title="Perform Api Action" />
    </View>
  );
};
