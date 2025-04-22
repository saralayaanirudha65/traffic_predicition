import axios from "axios";
import { useEffect, useState } from "react";

const TrafficData = () => {
  const [traffic, setTraffic] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/traffic")
      .then(response => {
        setTraffic(response.data);
      })
      .catch(error => console.error("Error fetching traffic data:", error));
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold">🚦 Traffic Status</h2>
      {traffic ? (
        <div>
          <p>Condition: {traffic.traffic_condition}</p>
          <p>Average Speed: {traffic.average_speed} km/h</p>
        </div>
      ) : (
        <p>Loading traffic data...</p>
      )}
    </div>
  );
};

export default TrafficData;
