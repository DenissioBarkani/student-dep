"use client";

import { cn } from "@/lib/utils";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
  className?: string;
}

const hardSkillsData = [
  {
    name: "C++",
    value: 85,
  },
  {
    name: "React",
    value: 90,
  },
  {
    name: "TypeScript",
    value: 75,
  },
  {
    name: "NextJS",
    value: 80,
  },
  {
    name: "Git",
    value: 70,
  },
  {
    name: "SQL",
    value: 65,
  },
];

export function HardSkillsChart({ className }: Props) {
  return (
    <div className={cn(className, "h-[300px] w-full")}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={hardSkillsData} layout="vertical">
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="name" width={100} />
          <Bar
            dataKey="value"
            fill="#2563eb"
            radius={[0, 4, 4, 0]}
            label={{ position: "right", fill: "#6b7280" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
