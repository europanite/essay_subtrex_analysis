import React, { useEffect, useMemo, useRef } from "react";
import { Platform, Text, View } from "react-native";
import type { HistogramBin, SentencePoint } from "../lib/analysis/types";
import { CHART_COLORS } from "../lib/constants";

type JointDistributionChartProps = {
  points: SentencePoint[];
  xBins: HistogramBin[];
  yBins: HistogramBin[];
  width: number;
  height: number;
};

type PlotlyLike = {
  react: (element: HTMLElement, data: any[], layout: any, config?: any) => Promise<any>;
  purge: (element: HTMLElement) => void;
  Plots?: { resize: (element: HTMLElement) => void };
};

function sentencePreview(sentence: string) {
  return sentence.length > 120 ? `${sentence.slice(0, 117)}...` : sentence;
}

function binSize(bins: HistogramBin[], fallback: number) {
  if (bins.length > 0) {
    return Math.max(0.0001, bins[0].end - bins[0].start);
  }
  return fallback;
}

function axisRange(bins: HistogramBin[], values: number[], paddingRatio = 0.04) {
  if (bins.length > 0) {
    return [bins[0].start, bins[bins.length - 1].end];
  }
  if (values.length === 0) {
    return [0, 1];
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) {
    return [min - 1, max + 1];
  }
  const pad = (max - min) * paddingRatio;
  return [min - pad, max + pad];
}

function buildPlotlyFigure(points: SentencePoint[], xBins: HistogramBin[], yBins: HistogramBin[]) {
  const xValues = points.map((point) => point.wordCount);
  const yValues = points.map((point) => point.averageDifficulty);
  const previews = points.map((point) => sentencePreview(point.sentence));
  const xRange = axisRange(xBins, xValues);
  const yRange = axisRange(yBins, yValues);
  const xBinSize = binSize(xBins, 1);
  const yBinSize = binSize(yBins, 0.2);

  const sharedHover = points.map((point) => [
    point.sentence,
    point.wordCount,
    point.uniqueWordCount,
    point.averageDifficulty,
    point.averageZipf,
    point.unknownWordCount
  ]);

  const topHistogram = {
    type: "histogram",
    x: xValues,
    xaxis: "x2",
    yaxis: "y2",
    nbinsx: Math.max(6, xBins.length),
    marker: {
      color: "#2c7bb6",
      line: {
        color: "#1d5d8f",
        width: 1
      }
    },
    opacity: 0.9,
    hovertemplate: "Words per sentence: %{x}<br>Sentences: %{y}<extra></extra>",
    autobinx: false,
    xbins: {
      start: xRange[0],
      end: xRange[1],
      size: xBinSize
    },
    showlegend: false
  };

  const rightHistogram = {
    type: "histogram",
    y: yValues,
    xaxis: "x3",
    yaxis: "y3",
    nbinsy: Math.max(6, yBins.length),
    marker: {
      color: "#2c7bb6",
      line: {
        color: "#1d5d8f",
        width: 1
      }
    },
    opacity: 0.9,
    autobiny: false,
    ybins: {
      start: yRange[0],
      end: yRange[1],
      size: yBinSize
    },
    hovertemplate: "Average difficulty: %{y:.2f}<br>Sentences: %{x}<extra></extra>",
    showlegend: false
  };

  const centerTrace = {
    type: "histogram2dcontour",
    x: xValues,
    y: yValues,
    xaxis: "x",
    yaxis: "y",
    nbinsx: Math.max(10, xBins.length),
    nbinsy: Math.max(10, yBins.length),
    autobinx: false,
    autobiny: false,
    xbins: {
      start: xRange[0],
      end: xRange[1],
      size: xBinSize
    },
    ybins: {
      start: yRange[0],
      end: yRange[1],
      size: yBinSize
    },
    ncontours: Math.max(10, Math.min(20, xBins.length + yBins.length)),
    contours: {
      coloring: "heatmap",
      showlabels: false
    },
    colorscale: "Jet",
    colorbar: {
      title: { text: "Density" },
      len: 0.78,
      y: 0.39,
      thickness: 16,
      outlinewidth: 0
    },
    line: {
      color: "rgba(0, 0, 0, 0.28)",
      width: 0.8
    },
    hovertemplate: [
      "Words: %{x}",
      "Difficulty: %{y:.2f}",
      "Density: %{z}",
      "<extra></extra>"
    ].join("<br>"),
    showscale: true,
    showlegend: false
  };

  const layout = {
    autosize: true,
    paper_bgcolor: CHART_COLORS.canvasBackground,
    plot_bgcolor: CHART_COLORS.panelBackground,
    margin: { l: 72, r: 94, t: 20, b: 60 },
    bargap: 0.03,
    hoverlabel: {
      bgcolor: "rgba(35, 31, 40, 0.96)",
      bordercolor: "rgba(255,255,255,0.08)",
      font: { color: "#f8fafc", size: 12 }
    },
    dragmode: false,
    xaxis: {
      domain: [0, 0.78],
      range: xRange,
      title: { text: "Words per sentence", font: { size: 13, color: CHART_COLORS.labelText } },
      gridcolor: CHART_COLORS.grid,
      zeroline: false,
      linecolor: CHART_COLORS.axisLine,
      mirror: false,
      ticks: "outside",
      tickfont: { size: 11, color: CHART_COLORS.axisText }
    },
    yaxis: {
      domain: [0, 0.78],
      range: yRange,
      title: { text: "Average word difficulty", font: { size: 13, color: CHART_COLORS.labelText } },
      gridcolor: CHART_COLORS.grid,
      zeroline: false,
      linecolor: CHART_COLORS.axisLine,
      tickfont: { size: 11, color: CHART_COLORS.axisText }
    },
    xaxis2: {
      domain: [0, 0.78],
      anchor: "y2",
      matches: "x",
      showgrid: false,
      zeroline: false,
      showticklabels: false,
      linecolor: CHART_COLORS.axisLine
    },
    yaxis2: {
      domain: [0.82, 1],
      anchor: "x2",
      showgrid: false,
      zeroline: false,
      tickfont: { size: 10, color: CHART_COLORS.axisText },
      title: { text: "Count", font: { size: 11, color: CHART_COLORS.axisText } }
    },
    xaxis3: {
      domain: [0.82, 1],
      anchor: "y3",
      showgrid: false,
      zeroline: false,
      tickfont: { size: 10, color: CHART_COLORS.axisText },
      title: { text: "Count", font: { size: 11, color: CHART_COLORS.axisText } }
    },
    yaxis3: {
      domain: [0, 0.78],
      anchor: "x3",
      matches: "y",
      showgrid: false,
      zeroline: false,
      showticklabels: false,
      linecolor: CHART_COLORS.axisLine
    },
    showlegend: false,
    font: {
      family: "Arial, Helvetica, sans-serif",
      color: CHART_COLORS.bodyText
    }
  };

  const config = {
    responsive: true,
    displayModeBar: true,
    modeBarButtonsToRemove: [
      "select2d",
      "lasso2d",
      "autoScale2d",
      "toggleSpikelines",
      "hoverClosestCartesian",
      "hoverCompareCartesian"
    ],
    displaylogo: false,
    scrollZoom: false
  };

  return {
    data: [topHistogram, rightHistogram, centerTrace],
    layout,
    config
  };
}

export default function JointDistributionChart({
  points,
  xBins,
  yBins,
  width,
  height
}: JointDistributionChartProps) {
  const containerRef = useRef<any>(null);

  const figure = useMemo(() => buildPlotlyFigure(points, xBins, yBins), [points, xBins, yBins]);

  useEffect(() => {
    if (Platform.OS !== "web") {
      return;
    }

    let cancelled = false;
    let plotly: PlotlyLike | null = null;
    let resizeHandler: (() => void) | null = null;

    const render = async () => {
      const container = containerRef.current as HTMLElement | null;
      if (!container) {
        return;
      }

      const plotlyModule = await import("plotly.js-dist-min");
      if (cancelled) {
        return;
      }

      plotly = (plotlyModule.default ?? plotlyModule) as PlotlyLike;
      await plotly.react(container, figure.data, figure.layout, figure.config);

      resizeHandler = () => {
        if (!plotly || !containerRef.current) {
          return;
        }
        plotly.Plots?.resize(containerRef.current as HTMLElement);
      };

      window.addEventListener("resize", resizeHandler);
    };

    render().catch((error) => {
      console.error("Plotly render failed", error);
    });

    return () => {
      cancelled = true;
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
      const container = containerRef.current as HTMLElement | null;
      if (plotly && container) {
        plotly.purge(container);
      }
    };
  }, [figure]);

  if (Platform.OS !== "web") {
    return (
      <View
        style={{
          width,
          borderWidth: 1,
          borderColor: CHART_COLORS.cardBorder,
          borderRadius: 18,
          backgroundColor: CHART_COLORS.cardBackground,
          padding: 18,
          gap: 8
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700", color: CHART_COLORS.titleText }}>
          Plot unavailable on this platform
        </Text>
        <Text style={{ fontSize: 14, lineHeight: 22, color: CHART_COLORS.bodyText }}>
          This Plotly build targets Expo Web. Open the project in a browser to see the joint plot.
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        width,
        borderWidth: 1,
        borderColor: CHART_COLORS.cardBorder,
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: CHART_COLORS.cardBackground,
        padding: 14,
        gap: 10
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", color: CHART_COLORS.titleText }}>
        Words Distribution
      </Text>
      <View
        ref={containerRef}
        style={{
          width: "100%",
          height,
          backgroundColor: CHART_COLORS.canvasBackground,
          borderRadius: 14,
          overflow: "hidden"
        }}
      />
    </View>
  );
}
