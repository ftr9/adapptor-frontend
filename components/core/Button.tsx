import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import React from "react";
import { COLORS } from "@/constants";
import Text from "./Text";

export interface IButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export const Button = ({ title, loading = false, ...props }: IButtonProps) => {
  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.5}
      style={styles.btnContainer}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          testID="activity-indicator"
          size={17}
          color={"white"}
        />
      ) : (
        <Text style={styles.btnText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 100,
    width: "100%",
  },
  btnText: {
    color: COLORS.btnTextPrimary,
    textAlign: "center",
    fontWeight: 500,
  },
});
