import React from "react";

// Import routing for different pages
import {
  Switch,
  Route
} from "react-router-dom";

// Import components
import UploadPage from "./uploadPage/UploadPage";
import RecPage from "./recPage/RecPage";
import "./css/uploadPage.css";


const App = () => {
  return (
    <div>
    <Switch>
      <Route path="/recommendation">
        <RecPage degree={2}/>
      </Route>
      <Route exact path="/">
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
