import React from "react";

// Import routing for different pages
import {
  Switch,
  Route
} from "react-router-dom";

// Import components
import UploadPage from "./uploadPage/UploadPage";
import "./css/uploadPage.css";
import RecPage from "./recPage/RecPage";

const App = () => {
  return (
    <div>
    <Switch>
      <Route path="/upload">
        <UploadPage />
      </Route>
      <Route path="/recommendation">
        <RecPage />
      </Route>
      <Route path="/">
        <UploadPage />
      </Route>
    </Switch>
    </div>
    // <React.Fragment>
    //   <UploadPage />
    // </React.Fragment>
  );
};

export default App;
