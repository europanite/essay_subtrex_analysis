import React from "react";
import { Text, View } from "react-native";
import Svg, { Line, Rect, Text as SvgText } from "react-native-svg";
import type { HistogramBin } from "../lib/analysis/types";

type HistogramProps = {
  bins: HistogramBin[];
  width: number;
  height: number;
  title: string;
  orientation?: "horizontal" | "vertical";
  valueFormatter?: (value: number) => string;
};

function formatRange(start: number, end: number, formatter: (value: number) => string) {
  return `${formatter(start)}-${formatter(end)}`;
}

export default function Histogram({
  bins,
  width,
  height,
  title,
  orientation = "horizontal",
  valueFormatter = (value) => value.toFixed(1)
}: HistogramProps) {
  const padding = 28;
  const innerWidth = Math.max(1, width - padding * 2);
  const innerHeight = Math.max(1, height - padding * 2);
  const maxCount = Math.max(1, ...bins.map((bin) => bin.count));

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>{title}</Text>
      <Svg width={width} height={height}>
        <Rect x={0} y={0} width={width} height={height} fill="#ffffff" rx={16} />
        <Rect
          x={padding}
          y={padding}
          width={innerWidth}
          height={innerHeight}
          fill="#eff6ff"
          rx={10}
        />
        <Line
          x1={padding}
          y1={padding + innerHeight}
          x2={padding + innerWidth}
          y2={padding + innerHeight}
          stroke="#94a3b8"
          strokeWidth={1}
        />
        <Line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={padding + innerHeight}
          stroke="#94a3b8"
          strokeWidth={1}
        />
        {bins.map((bin, index) => {
          if (orientation === "horizontal") {
            const barWidth = innerWidth / Math.max(1, bins.length);
            const barHeight = (bin.count / maxCount) * (innerHeight - 10);
            const x = padding + index * barWidth + 2;
            const y = padding + innerHeight - barHeight;
            return (
              <React.Fragment key={`${bin.start}-${bin.end}`}>
                <Rect
                  x={x}
                  y={y}
                  width={Math.max(2, barWidth - 4)}
                  height={Math.max(1, barHeight)}
                  fill="#93c5fd"
                  rx={4}
                />
                <SvgText
                  x={x + barWidth / 2}
                  y={padding + innerHeight + 14}
                  fontSize="9"
                  fill="#475569"
                  textAnchor="middle"
                >
                  {formatRange(bin.start, bin.end, valueFormatter)}
                </SvgText>
              </React.Fragment>
            );
          }

          const barHeight = innerHeight / Math.max(1, bins.length);
          const barWidth = (bin.count / maxCount) * (innerWidth - 10);
          const x = padding;
          const y = padding + index * barHeight + 2;
          return (
            <React.Fragment key={`${bin.start}-${bin.end}`}>
              <Rect
                x={x}
                y={y}
                width={Math.max(1, barWidth)}
                height={Math.max(2, barHeight - 4)}
                fill="#93c5fd"
                rx={4}
              />
              <SvgText
                x={padding + innerWidth + 2}
                y={y + barHeight / 2 + 2}
                fontSize="9"
                fill="#475569"
              >
                {formatRange(bin.start, bin.end, valueFormatter)}
              </SvgText>
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
}
