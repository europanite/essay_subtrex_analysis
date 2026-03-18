import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle, Line, Rect, Text as SvgText } from "react-native-svg";
import type { SentencePoint } from "../lib/analysis/types";

type ScatterPlotProps = {
  points: SentencePoint[];
  width: number;
  height: number;
};

function safeBounds(values: number[]) {
  if (!values.length) {
    return { min: 0, max: 1 };
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  if (min === max) {
    return { min: min - 1, max: max + 1 };
  }

  return { min, max };
}

export default function ScatterPlot({ points, width, height }: ScatterPlotProps) {
  const padding = 42;
  const innerWidth = Math.max(1, width - padding * 2);
  const innerHeight = Math.max(1, height - padding * 2);

  const xBounds = safeBounds(points.map((point) => point.wordCount));
  const yBounds = safeBounds(points.map((point) => point.averageDifficulty));

  const mapX = (value: number) =>
    padding + ((value - xBounds.min) / (xBounds.max - xBounds.min)) * innerWidth;
  const mapY = (value: number) =>
    padding + innerHeight - ((value - yBounds.min) / (yBounds.max - yBounds.min)) * innerHeight;

  const ticks = 5;

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>Sentence scatter plot</Text>
      <Svg width={width} height={height}>
        <Rect x={0} y={0} width={width} height={height} fill="#ffffff" rx={16} />
        <Rect x={padding} y={padding} width={innerWidth} height={innerHeight} fill="#eff6ff" rx={12} />

        {Array.from({ length: ticks + 1 }, (_, index) => {
          const ratio = index / ticks;
          const x = padding + ratio * innerWidth;
          const y = padding + ratio * innerHeight;
          const xValue = xBounds.min + ratio * (xBounds.max - xBounds.min);
          const yValue = yBounds.max - ratio * (yBounds.max - yBounds.min);

          return (
            <React.Fragment key={index}>
              <Line x1={x} y1={padding} x2={x} y2={padding + innerHeight} stroke="#dbeafe" strokeWidth={1} />
              <Line x1={padding} y1={y} x2={padding + innerWidth} y2={y} stroke="#dbeafe" strokeWidth={1} />
              <SvgText x={x} y={padding + innerHeight + 18} fontSize="10" fill="#475569" textAnchor="middle">
                {xValue.toFixed(1)}
              </SvgText>
              <SvgText x={padding - 8} y={y + 3} fontSize="10" fill="#475569" textAnchor="end">
                {yValue.toFixed(1)}
              </SvgText>
            </React.Fragment>
          );
        })}

        <Line x1={padding} y1={padding + innerHeight} x2={padding + innerWidth} y2={padding + innerHeight} stroke="#64748b" strokeWidth={1.2} />
        <Line x1={padding} y1={padding} x2={padding} y2={padding + innerHeight} stroke="#64748b" strokeWidth={1.2} />

        {points.map((point) => (
          <React.Fragment key={point.id}>
            <Circle
              cx={mapX(point.wordCount)}
              cy={mapY(point.averageDifficulty)}
              r={5}
              fill="#1d4ed8"
              stroke="#ffffff"
              strokeWidth={1.5}
            />
            <SvgText
              x={mapX(point.wordCount) + 8}
              y={mapY(point.averageDifficulty) - 6}
              fontSize="10"
              fill="#1e293b"
            >
              {String(point.id)}
            </SvgText>
          </React.Fragment>
        ))}

        <SvgText
          x={padding + innerWidth / 2}
          y={height - 6}
          fontSize="11"
          fill="#334155"
          textAnchor="middle"
        >
          Sentence word count
        </SvgText>

        <SvgText
          x={12}
          y={padding + innerHeight / 2}
          fontSize="11"
          fill="#334155"
          rotation="-90"
          originX={12}
          originY={padding + innerHeight / 2}
          textAnchor="middle"
        >
          Average word difficulty
        </SvgText>
      </Svg>
    </View>
  );
}
