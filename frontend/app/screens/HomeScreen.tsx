import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  useWindowDimensions,
  View
} from "react-native";
import JointDistributionChart from "../components/JointDistributionChart";
import InfoCard from "../components/InfoCard";
import SentenceTable from "../components/SentenceTable";
import TextPanel from "../components/TextPanel";
import { loadSampleEssayText } from "../lib/analysis/sampleEssay";
import { analyzeEssay } from "../lib/analysis/text";
import type { EssayAnalysis } from "../lib/analysis/types";
import { CHART_COLORS } from "../lib/constants";
export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const chartWidth = Math.max(320, Math.min(width - 96, 980));
  const [essay, setEssay] = useState("");
  const [analysis, setAnalysis] = useState<EssayAnalysis | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadSample = async () => {
    try {
      setError(null);
      const sampleText = await loadSampleEssayText();
      setEssay(sampleText);
    } catch (_sampleError) {
      setError("Failed to load the sample essay text.");
    }
  };

  useEffect(() => {
    void handleLoadSample();
  }, []);

  const handleAnalyze = async () => {
    try {
      setBusy(true);
      setError(null);
      const result = await analyzeEssay(essay);
      setAnalysis(result);
    } catch (_analysisError) {
      setError("Failed to analyze the essay. Please check the input text.");
    } finally {
      setBusy(false);
    }
  };

  const summaryCards = useMemo(() => {
    if (!analysis) {
      return [];
    }

    return [
      { label: "Sentences", value: String(analysis.summary.sentenceCount) },
      { label: "Total words", value: String(analysis.summary.totalWords) },
      { label: "Avg sentence length", value: String(analysis.summary.averageSentenceLength) },
      { label: "Avg difficulty", value: String(analysis.summary.averageSentenceDifficulty) },
      { label: "Unknown-word rate", value: `${analysis.unknownRate}%` }
    ];
  }, [analysis]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 18
      }}
    >
      <TextPanel
        value={essay}
        onChangeText={setEssay}
        onAnalyze={handleAnalyze}
        onLoadSample={handleLoadSample}
        busy={busy}
      />

      {!analysis && !busy ? (
        <InfoCard title="How the score works">
          <Text style={{ fontSize: 14, lineHeight: 22, color: CHART_COLORS.bodyText }}>
            Average word difficulty is estimated from a SUBTLEX-style frequency dictionary. Common words stay lower on the chart, while rarer or unknown words move a sentence upward.
          </Text>
        </InfoCard>
      ) : null}

      {busy ? (
        <InfoCard title="Loading dictionary and calculating metrics">
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <ActivityIndicator />
            <Text style={{ color: CHART_COLORS.bodyText, fontSize: 14 }}>
              Loading the dictionary and analyzing each sentence in the browser.
            </Text>
          </View>
        </InfoCard>
      ) : null}

      {error ? (
        <InfoCard title="Analysis error">
          <Text style={{ color: "#b91c1c", fontSize: 14 }}>{error}</Text>
        </InfoCard>
      ) : null}

      {analysis ? (
        <>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {summaryCards.map((card) => (
              <View
                key={card.label}
                style={{
                  minWidth: 160,
                  flexGrow: 1,
                  backgroundColor: "#ffffff",
                  borderWidth: 1,
                  borderColor: CHART_COLORS.cardBorder,
                  borderRadius: 18,
                  padding: 16,
                  gap: 6
                }}
              >
                <Text style={{ fontSize: 12, color: CHART_COLORS.subtleText, fontWeight: "700" }}>
                  {card.label}
                </Text>
                <Text style={{ fontSize: 22, color: CHART_COLORS.titleText, fontWeight: "800" }}>
                  {card.value}
                </Text>
              </View>
            ))}
          </View>

          <JointDistributionChart
            points={analysis.sentences}
            xBins={analysis.xBins}
            yBins={analysis.yBins}
            width={chartWidth}
            height={620}
          />

          <SentenceTable sentences={analysis.sentences} />
        </>
      ) : null}
    </ScrollView>
  );
}
