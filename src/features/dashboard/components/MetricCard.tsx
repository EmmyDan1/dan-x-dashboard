import { MetricData } from "../../../data/MetricData";

const MetricCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
      {MetricData.map((metric) => (
        <div
          key={metric.id}
          className="bg-primary p-4 rounded-lg  hover:shadow-lg transition-shadow duration-300 flex justify-between w-full items-center text-ivory border border-white/15 bg-white/5 backdrop-blur-md shadow-inner"
        >
          <div className="">
            <h3 className="text-sm font-normal">{metric.title}</h3>
            <p className="text-2xl font-normal mt-2">{metric.value}</p>
            <p className="text-sm text-gray-500 mt-1">{metric.order}</p>
          </div>
          <p
            className={` py-1 px-2 -mt-12 rounded-full text-white text-sm ${
              metric.status === "Growth"
                ? "bg-green"
                : metric.status === "Loss"
                ? "bg-red"
                : metric.status === "Neutral"
                ? "bg-blue"
                : "text-yellow-500"
            }`}
          >
            {metric.status} ({(metric.percentage * 100).toFixed(1)}%)
          </p>
        </div>
      ))}
    </section>
  );
};

export default MetricCard;
