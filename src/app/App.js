import React, { useState, useEffect } from "react";

// Import components
import LandingBox from "../uploadPage/LandingBox";
import FooterBox from "../uploadPage/FooterBox";

const App = () => {
  const [state, setState] = useState('Hi');

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setState(data.result);
    });
  }, []);

  return (
    <div className="mainFrame">
      <LandingBox />
  <p>Flask says {state}</p>
      <FooterBox />
    </div>
  );
};

export default App;
