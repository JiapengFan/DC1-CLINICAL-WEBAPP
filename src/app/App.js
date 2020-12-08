import React, { useState, useEffect } from "react";

// Import components
import LandingBox from "../uploadPage/LandingBox";
import FooterBox from "../uploadPage/FooterBox";

const App = () => {
  const [prediction, setPrediction] = useState(0);

  useEffect(() => {
    fetch('/predictor').then(res => res.json()).then(data => {
      setPrediction(data.prediction);
    });
  }, []);

  return (
    <div className="mainFrame">
      <LandingBox />
      <p>Flask says {prediction}</p>
      <FooterBox />
    </div>
  );
};

export default App;
