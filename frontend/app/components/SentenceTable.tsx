import React from "react";
import { ScrollView, Text, View } from "react-native";
import type { SentencePoint } from "../lib/analysis/types";
import { CHART_COLORS } from "../lib/constants";

type SentenceTableProps = {
  sentences: SentencePoint[];
};

const headerStyle = {
  fontSize: 12,
  fontWeight: "700" as const,
  color: CHART_COLORS.axisText
};

const cellStyle = {
  fontSize: 12,
  color: CHART_COLORS.bodyText
};

export default function SentenceTable({ sentences }: SentenceTableProps) {
  return (
    <View
      style={{
        backgroundColor: CHART_COLORS.cardBackground,
        borderWidth: 1,
        borderColor: CHART_COLORS.cardBorder,
        borderRadius: 18,
        padding: 16,
        gap: 12
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", color: CHART_COLORS.titleText }}>
        Sentence metrics
      </Text>

      <ScrollView horizontal>
        <View style={{ minWidth: 900 }}>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#e3dde7",
              paddingBottom: 8,
              marginBottom: 8
            }}
          >
            <Text style={[headerStyle, { width: 44 }]}>#</Text>
            <Text style={[headerStyle, { width: 420 }]}>Sentence</Text>
            <Text style={[headerStyle, { width: 110 }]}>Words</Text>
            <Text style={[headerStyle, { width: 130 }]}>Unique words</Text>
            <Text style={[headerStyle, { width: 140 }]}>Avg difficulty</Text>
            <Text style={[headerStyle, { width: 120 }]}>Avg zipf</Text>
            <Text style={[headerStyle, { width: 120 }]}>Unknown</Text>
          </View>

          {sentences.map((sentence, index) => (
            <View
              key={sentence.id}
              style={{
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 4,
                borderRadius: 10,
                backgroundColor: index % 2 === 0 ? "#fbf9fc" : "transparent",
                borderBottomWidth: 1,
                borderBottomColor: "#f3edf6"
              }}
            >
              <Text style={[cellStyle, { width: 44 }]}>{sentence.id}</Text>
              <Text style={[cellStyle, { width: 420, lineHeight: 18 }]}>{sentence.sentence}</Text>
              <Text style={[cellStyle, { width: 110 }]}>{sentence.wordCount}</Text>
              <Text style={[cellStyle, { width: 130 }]}>{sentence.uniqueWordCount}</Text>
              <Text style={[cellStyle, { width: 140 }]}>{sentence.averageDifficulty}</Text>
              <Text style={[cellStyle, { width: 120 }]}>{sentence.averageZipf}</Text>
              <Text style={[cellStyle, { width: 120 }]}>{sentence.unknownWordCount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
