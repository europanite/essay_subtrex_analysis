import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { CHART_COLORS } from "../lib/constants";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  grow?: boolean;
};

export default function InfoCard({ title, children, grow = false }: InfoCardProps) {
  return (
    <View
      style={{
        flex: grow ? 1 : undefined,
        backgroundColor: CHART_COLORS.cardBackground,
        borderWidth: 1,
        borderColor: CHART_COLORS.cardBorder,
        borderRadius: 18,
        padding: 16,
        gap: 12,
        shadowColor: "#111827",
        shadowOpacity: 0.05,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 }
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", color: CHART_COLORS.titleText }}>{title}</Text>
      {children}
    </View>
  );
}
