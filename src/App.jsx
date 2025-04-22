import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navv from './compo/navbar/Navv';
import TrafficData from './Trafficdatasets/TrafficData';
import TrafficAnalysis from './Trafficdatasets/TrafficPredict';
import TrafficPlot from './Trafficdatasets/TrafficPlot';

function App() {
  return (
    <BrowserRouter>
      <Navv />  
      <Routes>
        <Route path="/TrafficData" element={<TrafficData />} />
        <Route path="/TrafficPlot" element={<TrafficPlot />} />
        <Route path="/TrafficAnalysis" element={<TrafficAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
