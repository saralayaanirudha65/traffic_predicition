import { useEffect, useState } from "react";

const TrafficPlot = () => {
  const [plotUrl, setPlotUrl] = useState("");

  useEffect(() => {
    // Directly set the URL of the generated plot
    setPlotUrl("http://127.0.0.1:5000/api/traffic-plot");
  }, []);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-2">📈 Traffic Density Plot</h2>
      {plotUrl ? (
        <img src={plotUrl} alt="Traffic Density Plot" className="w-full" />
      ) : (
        <p>Loading plot...</p>
      )}
    </div>
  );
};

export default TrafficPlot;
