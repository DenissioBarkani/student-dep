"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      skill: string;
    };
  }>;
}

interface AxisTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
}

const softSkillsData = [
  {
    skill: "Коммуникабельность",
    value: 90,
  },
  {
    skill: "Командная работа",
    value: 85,
  },
  {
    skill: "Тайм-менеджмент",
    value: 80,
  },
  {
    skill: "Креативность",
    value: 75,
  },
  {
    skill: "Лидерство",
    value: 70,
  },
  {
    skill: "Стрессоустойчивость",
    value: 85,
  },
];

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg rounded-lg border text-sm">
        <p className="text-gray-600">{payload[0].payload.skill}</p>
        <p className="font-medium">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const CustomAxisTick = ({ x = 0, y = 0, payload }: AxisTickProps) => {
  if (!payload) return null;

  const words = payload.value.split(" ");
  const lineHeight = 15;

  return (
    <g transform={`translate(${x},${y})`}>
      {words.map((word: string, index: number) => (
        <text
          key={index}
          x={0}
          y={index * lineHeight}
          dy={10}
          textAnchor="middle"
          fill="#6b7280"
          fontSize="11">
          {word}
        </text>
      ))}
    </g>
  );
};

export function SoftSkillsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={softSkillsData}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          outerRadius={120}>
          <PolarGrid gridType="circle" />
          <PolarAngleAxis
            dataKey="skill"
            tick={<CustomAxisTick />}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Уровень"
            dataKey="value"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.6}
            dot={{
              fill: "#2563eb",
              r: 4,
              strokeWidth: 2,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
