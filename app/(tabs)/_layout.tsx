import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { COLORS } from "@/constants";
import { Text } from "@/components";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const renderTabBarIcon = (
  name: React.ComponentProps<typeof FontAwesome>["name"]
) => {
  return ({ focused }: { focused: boolean; color: string; size: number }) => {
    return (
      <FontAwesome
        size={20}
        style={{ marginBottom: -3 }}
        name={name}
        color={focused ? COLORS.primary : COLORS.textPrimary}
      />
    );
  };
};

const renderTabBarLabel = (label: string) => {
  return ({
    focused,
  }: {
    focused: boolean;
    color: string;
    position: "beside-icon" | "below-icon";
    children: string;
  }) => {
    return (
      <Text style={{ fontSize: 12 }} type={focused ? "secondary" : "primary"}>
        {label}
      </Text>
    );
  };
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "Agora LiveStock",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: renderTabBarIcon("home"),
          tabBarLabel: renderTabBarLabel("Home"),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: renderTabBarIcon("info-circle"),
          tabBarLabel: renderTabBarLabel("About"),
        }}
      />
    </Tabs>
  );
}
