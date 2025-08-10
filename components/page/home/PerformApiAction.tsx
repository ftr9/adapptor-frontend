import { Button } from "@/components/core";
import { View } from "react-native";
import { BASE_API } from "@/services/api";
import { useState } from "react";
import { AxiosError } from "axios";
import { showToastMessage } from "@/utils/showToastMessage";

export const PerformApiAction = () => {
  const [loading, setLoading] = useState(false);
  const sendPayloadToServer = async () => {
    try {
      setLoading(true);
      await BASE_API.post("/action", {
        foo: "bar",
      });

      showToastMessage({
        type: "success",
        text1: "success",
        text2: "Successfully proccessed json body",
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        showToastMessage({
          type: "error",
          text1: "Failed",
          text2: err.response?.data.message,
        });
        return;
      }
      showToastMessage({
        type: "error",
        text1: "Failed",
        text2: "something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ width: "50%", marginTop: 10 }}>
      <Button
        testID="performActionBtn"
        loading={loading}
        onPress={sendPayloadToServer}
        title="Perform Api Action"
      />
    </View>
  );
};
