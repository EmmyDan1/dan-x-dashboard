import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const RevenueLineChart = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: false },
      redrawOnParentResize: true,
      redrawOnWindowResize: true,
      fontFamily: "inherit",
    },
    grid: {
      show: true,
      borderColor: "rgba(255, 255, 255, 0.1)",
      strokeDashArray: 4,
      padding: { left: 16, right: 16 },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#3b82f6", "#10b981"], 
    dataLabels: { enabled: false },
    markers: { size: 4 },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      labels: {
        style: { colors: "#9ca3af" },
        hideOverlappingLabels: true,
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: {
        style: { colors: "#9ca3af" }, 
        formatter: (val) => val.toFixed(0),
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: { colors: "#f3f4f6" }, 
      itemMargin: { horizontal: 16, vertical: 8 },
    },
    tooltip: {
      theme: "dark",
      fixed: { enabled: true, position: "topRight" },
    },
    responsive: [{
      breakpoint: 640,
      options: {
        chart: { height: 200 },
        legend: { position: "bottom" }
      }
    }]
  };

  const chartSeries = [
    {
      name: "Revenue",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    {
      name: "Profit",
      data: [20, 25, 30, 35, 40, 45, 50, 55, 60],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full h-[300px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Revenue Overview
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last 9 Months
        </div>
      </div>
      

      <div className="relative w-full" style={{ paddingBottom: "50%" }}>
        <div className="absolute inset-0">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height="50%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default RevenueLineChart;