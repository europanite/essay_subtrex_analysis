import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { APP_NAME } from "../lib/constants";

export default function SettingsBar() {
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: "#2d2532" }}>
      <StatusBar style="light" backgroundColor="#2d2532" />
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 14,
          paddingBottom: 16,
          gap: 6
        }}
      >
        <Text style={{ color: "#fff7ff", fontSize: 22, fontWeight: "800" }}>
          {APP_NAME}
        </Text>
      </View>
    </SafeAreaView>
  );
}
