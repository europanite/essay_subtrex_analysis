import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import SettingsBar from "./components/SettingsBar";
import HomeScreen from "./screens/HomeScreen";
import { CHART_COLORS } from "./lib/constants";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={{ flex: 1, backgroundColor: CHART_COLORS.appBackground }}>
        <SettingsBar />
        <HomeScreen />
      </View>
    </SafeAreaProvider>
  );
}
