import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { CHART_COLORS } from "../lib/constants";

type TextPanelProps = {
  value: string;
  onChangeText: (text: string) => void;
  onAnalyze: () => void;
  onLoadSample: () => void;
  busy: boolean;
};

export default function TextPanel({
  value,
  onChangeText,
  onAnalyze,
  onLoadSample,
  busy
}: TextPanelProps) {
  return (
    <View
      style={{
        backgroundColor: CHART_COLORS.cardBackground,
        borderWidth: 1,
        borderColor: CHART_COLORS.cardBorder,
        borderRadius: 22,
        padding: 18,
        gap: 14,
        shadowColor: "#111827",
        shadowOpacity: 0.05,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 6 }
      }}
    >
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 20, fontWeight: "800", color: CHART_COLORS.titleText }}>
          Essay input
        </Text>
      </View>

      <TextInput
        multiline
        value={value}
        onChangeText={onChangeText}
        placeholder="Paste your essay here."
        textAlignVertical="top"
        style={{
          minHeight: 220,
          borderWidth: 1,
          borderColor: "#d3ccd6",
          borderRadius: 16,
          paddingHorizontal: 14,
          paddingVertical: 12,
          fontSize: 15,
          lineHeight: 23,
          color: CHART_COLORS.bodyText,
          backgroundColor: "#faf8fb"
        }}
      />

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        <Pressable
          onPress={onAnalyze}
          style={{
            backgroundColor: "#d93ce0",
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 12
          }}
        >
          <Text style={{ color: "#ffffff", fontWeight: "700" }}>
            {busy ? "Analyzing..." : "Analyze essay"}
          </Text>
        </Pressable>

        <Pressable
          onPress={onLoadSample}
          style={{
            backgroundColor: "#efe8f3",
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d9d0de"
          }}
        >
          <Text style={{ color: CHART_COLORS.titleText, fontWeight: "700" }}>Load sample</Text>
        </Pressable>
      </View>
    </View>
  );
}
