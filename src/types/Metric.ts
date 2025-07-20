export type MetricType = {
  id: number;
  title: string;
  value: string;
  percentage: number;
  order?: string; 
  status: "Growth" | "Loss" | "Neutral";
};
