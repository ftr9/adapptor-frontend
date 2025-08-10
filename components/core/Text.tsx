import { Text as RNText, TextProps, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@/constants";

interface ITextProps extends TextProps {
  type?: "primary" | "secondary";
}

const getTextStyle = (type: "primary" | "secondary") => {
  if (type === "primary") return styles.textPrimary;
  if (type === "secondary") return styles.textSecondary;

  return styles.textPrimary;
};

export const Text = (prop: ITextProps) => {
  const { children, style, type = "primary", ...props } = prop;
  return (
    <RNText style={[getTextStyle(type), style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  textPrimary: {
    color: COLORS.textPrimary,
  },
  textSecondary: {
    color: COLORS.textSecondary,
  },
});

export default Text;
