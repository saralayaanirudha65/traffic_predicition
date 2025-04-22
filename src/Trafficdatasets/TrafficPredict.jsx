import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const TrafficPredict = () => {
    const [trafficData, setTrafficData] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch("/traffic.csv")
            .then(response => response.text())
            .then(csvText => {
                const parsedData = Papa.parse(csvText, { header: true }).data;
                setTrafficData(parsedData);
            })
            .catch(error => console.error("Error loading CSV:", error));
    }, []);

    const nextData = () => {
        if (trafficData.length > 0) {
            setIndex((prevIndex) => (prevIndex + 1) % trafficData.length);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2 style={{ backgroundColor: "#ff2a68", color: "#fff", padding: "10px", borderRadius: "5px" }}>
                Traffic Data
            </h2>
            {trafficData.length > 0 ? (
                <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", background: "#f9f9f9" }}>
                    <p><strong>Date & Time:</strong> {trafficData[index]?.DateTime}</p>
                    <p><strong>Junction:</strong> {trafficData[index]?.Junction}</p>
                    <p><strong>Vehicles:</strong> {trafficData[index]?.Vehicles}</p>
                    <p><strong>ID:</strong> {trafficData[index]?.ID}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button 
                onClick={nextData} 
                style={{ marginTop: "10px", padding: "10px", cursor: "pointer", background: "#ff2a68", color: "#fff", border: "none", borderRadius: "5px" }}
            >
                Next Traffic Data
            </button>
        </div>
    );
};

export default TrafficPredict;
