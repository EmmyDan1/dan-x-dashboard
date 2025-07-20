import type { MetricType } from "../types/Metric"

export const MetricData: MetricType[]  = [
    {
        id: 1,
        title: "In-store Sales",
        value: "$12,345.48",
        percentage: 0.5,
        order: '8K orders',
        status: 'Loss'
        
    }
    ,
    {
        id: 2,
        title: "Website Sales",
        value: "$24,734.81",
        percentage: 0.3,
        order: '12K orders',
        status: 'Growth'
    },
    {
        id: 3,
        title: "Discounted Sales",
        value: "$7,567.25",
        order: '6K orders',
        percentage: -0.1,
        status: 'Neutral'
    },
    {
        id: 4,
        title: "Affilates",
        value: "45%",
        order:'160 orders',
        percentage: -0.2,
        status: 'Growth'
    }
]