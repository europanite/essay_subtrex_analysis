import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity,
  Linking 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { APP_NAME } from "../lib/constants";

export const REPO_URL      = "https://github.com/europanite/essay_subtrex_analysis";

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

        <TouchableOpacity onPress={() => Linking.openURL(REPO_URL)}>
          <Text
            style={{
              color: "#fff7ff",
              fontSize: 24,
              fontWeight: "800",
              marginBottom: 12,
              textDecorationLine: "underline",
            }}
          >
            {APP_NAME}
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
